import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopTutorCard from './TutorsCard';

// ----------------------------------------------------------------------

TutorList.propTypes = {
  tableData: PropTypes.array.isRequired,
};

export default function TutorList({ tableData}) {
  return (
    <Grid container spacing={3}>
      {tableData.map((tutor) => (
        <Grid key={tutor.id} item xs={12} sm={6} md={3}>
          <ShopTutorCard tutor={tutor} />
        </Grid>
      ))}
    </Grid>
  );
}
