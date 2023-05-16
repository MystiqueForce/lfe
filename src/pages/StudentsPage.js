import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { FormControlUnstyledContext } from '@mui/base';
import { Container, Stack, Typography } from '@mui/material';
// components
import StudentList from '../sections/@dashboard/students/StudentList';
// mock
import students from '../_mock/students';


// ----------------------------------------------------------------------

export default function StudentsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  
  const [tableData, setTableData] = useState([])





  useEffect(() => {

    fetch("https://lbwbw.onrender.com/studentdetails")

      .then((data) => data.json())

      .then((data) => setTableData(data))



  }, [])

  const modifiedTableData = tableData.map((row, index) => ({
    ...row,
    avatarUrl: `/assets/images/students/student_${index + 1}.jpg`,
  }));
  console.log( "tableData",modifiedTableData);

  return (
    <>
      <Helmet>
        <title>students | Leanrzy </title>
      </Helmet>

      <Container>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Students
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <StudentFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <StudentSort />
          </Stack>
        </Stack> */}

        <StudentList students={modifiedTableData} />
        {/* <StudentCartWidget /> */}
      </Container>
    </>
  );
}
