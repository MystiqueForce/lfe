import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentanceCase } from 'change-case';
import { useState, useEffect, forwardRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {
  Alert,
  Avatar,
  Card,
  Button,
  Snackbar,
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

const CustomButton = styled(Button)
// Displaying the list of selected tutors

const SnackbarAlert = forwardRef((props, ref) => {
  return <Alert elevation={6} ref={ref} {...props} />;
});




const UserPage = () => {
  const [tableData, setTableData] = useState([])
  const [openApprove, setOpenApprove] = useState(false);
  const [openDeny, setOpenDeny] = useState(false);
  const handleButtonClick = (id) => {
    console.log(id); // should log the ID of the row
    // Send the ID to the backend or any other processing
  };
  const handleDelete = (params) => {
    console.log(params)
    try {
      // console.log("Email should be here",id.row.email);
      const response = fetch(`/${params.row.email}`, {
        method: 'DELETE'
      });
      console.log("Successfully deleted")
    } catch (err) {
      console.error(err);
    }
  };
  const handleAdding = (params) => {
    console.log(params)
    console.log("Email should be here", params.row.email);
    fetch(`/${params.row.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: 2 }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successfully changed status to 2", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleApproveClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenApprove(false);
  };
  const handleDenyClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenDeny(false);
  };
  
  
  

  const columns = [
    // { field: 'email', headerName: 'Email' },
    {
      field: 'avatarUrl',
      headerName: '',
      sortable: false,
      renderCell: ({ row }) => (
        <Avatar src={row.avatarUrl} />
      ),
      width: 50,
    },
    { field: 'name', headerName: 'Name', minWidth: 150 },
    { field: 'phone', headerName: 'Phone Number', minWidth: 150 },
    { field: 'email', headerName: 'Email', minWidth: 200 },
    { field: 'age', headerName: 'Age', minWidth: 50 },
    // { field: 'button', headerName: 'Button', formatter: ({ row }) => <button color='red' onClick={() => handleClick(row)}>Click me</button> },
    {
      field: "actions",
      headerName: "Approve",
      sortable: false,
      renderCell: (params ) =>
        <>
        <Button  variant='contained' onClick={() => handleAdding(params)}>
          Approve
        </Button>
        <Snackbar
        open={openApprove}
        autoHideDuration={2000}
        onClose={handleApproveClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <SnackbarAlert onClose={handleApproveClose} severity="success">
          Profile is Approved!
        </SnackbarAlert>
      </Snackbar>
        </>,
    },
    {
      field: "action",
      headerName: "Deny",
      sortable: false,
      renderCell: (params ) =>
        <>
          <Button variant='outlined' onClick={() => handleDelete(params)}>
          Deny
        </Button>
        <Snackbar
        open={openDeny}
        autoHideDuration={2000}
        onClose={handleDenyClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <SnackbarAlert onClose={handleDenyClose} severity="error">
          Profile is Rejected!
        </SnackbarAlert>
      </Snackbar>
        </>,
    },
  ];

  useEffect(() => {
    fetch("https://lbwbw.onrender.com/trial")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])


  const modifiedTableData = tableData.map((row, index) => ({
    ...row,
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  }));

  console.log(tableData)
  return (
    <>
      <Helmet>
        <title>
          Review Tutors | Learnzy
        </title>
      </Helmet>
      <Container>
        <Typography variant="h3" sx={{m:2}}>
          Review Tutors
        </Typography>
        <Card>
          <DataGrid
          autowidth
            getRowId={(row) => row.name + row.email}
            rows={modifiedTableData}
            columns={columns}
            pageSize={12}
          />
        </Card>
      </Container>
    </>
  )

};

export default UserPage;