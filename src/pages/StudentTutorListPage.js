import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

import {
  Alert,
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import { styled } from '@mui/system';
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock

import USERLIST from '../_mock/user';
import palette from '../theme/palette';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
//   { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'select', label: 'Select', alignRight: false }
  // { id: '' },
];


// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}



export default function StudentTutorListPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // select all
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleCheckBox = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get('/getlist').then((response) => {
      setTableData(response.data);
    });
  }, []);

  const modifiedTableData = tableData.map((row, index) => ({
    ...row,
    avatarUrl: `/assets/images/tutors/tutor_${index + 1}.jpg`,
  }));


  const handleAddTutor = (row) => {
    const { name, phone, email } = row; // extract necessary data
    const newTutor = { name, phone, email }; // create new tutor object
  
    axios.post('/add-tutor', newTutor)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };



  // const [newTableData, setNewTableData] = useState([]);

  // const handleAdd = (row) => {
  //   const { name, city, subject } = row; // extract necessary data
  //   const newData =  { name, city, subject }; // add to new table data
  //   const updatedData = [...newTableData, newData]
  //   localStorage.setItem('newTableData', JSON.stringify(updatedData));
  //   setNewTableData(updatedData);
  // };

  
  
  


  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(modifiedTableData, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const CustomButton = styled(Button)`
  
  font-weight: bold;
  font-size: 0.875rem;
  background-color:${palette.success.light};
  padding: 6px 8px;
  border-radius: 6px;
  color:${palette.success.darker};
  transition: all 150ms ease;
  cursor: pointer;
  border: solid 1px;
  border-color:${palette.success.darker};

  &:hover {
    background-color: ${palette.success.dark};
    color:${palette.success.light};
  }
`;


return (

    <>
      <Helmet>
        <title> Tutor List </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom >
            All Available Tutors
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={modifiedTableData.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {modifiedTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, phone, select, email, avatarUrl } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} selected={selectedUser}>
                        

                        <TableCell >
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar alt={name} src={avatarUrl} />
                          <Typography variant="subtitle2" noWrap>
                            {name}
                          </Typography>
                        </Stack>
                      </TableCell>

                        <TableCell align="left">{phone}</TableCell>

                        <TableCell align="left">{email}</TableCell>

                        {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                        <TableCell align="right">
                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <CustomButton onClick = {() => handleAddTutor(row)}>
                              Add to My Tutors
                            </CustomButton>
                            {/* <Button variant="outlined" color="error" onClick={()=>alert('Denied!')}>
                              Deny
                            </Button> */}
                            {/* {isVerified ? (
                              <CustomButton disabled>Approved</CustomButton>
                              ) : (
                              <div>
                                <CustomButton onClick={() => handleApproveTeacher(id)}>Approve</CustomButton>
                                <Button variant="outlined" color="error" onClick={() => handleDenyTeacher(id)}>Deny</Button>
                              </div>
                            )} */}
                          </Stack>

                          {/* <Label color={(status === 'denied' && 'error') || 'success'}>{sentenceCase(status)}</Label> */}
                        </TableCell>

                        {/* <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell> */}
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
         

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={modifiedTableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  )
};
