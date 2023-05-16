import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// ----------------------------------------------------------------------

const StyledStudentImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopTutorCard.propTypes = {
  Tutor: PropTypes.object,
};

export default function ShopTutorCard({ tutor }) {
  const { name, cover,  status  , avatarUrl} = tutor;

  

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledStudentImg alt={name} src={avatarUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>
      </Stack>
    </Card>
  );
}
