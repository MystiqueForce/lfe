import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import AShopStudentCard from './AStudentCard';

// ----------------------------------------------------------------------

AStudentList.propTypes = {
  Students: PropTypes.array.isRequired,
};

export default function AStudentList({ students}) {
  return (
    <Grid container spacing={3}>
      {students.map((student) => (
        <Grid key={student.id} item xs={12} sm={6} md={3}>
          <AShopStudentCard student={student} />
        </Grid>
      ))}
    </Grid>
  );
}
