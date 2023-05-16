/* eslint-disable prefer-arrow-callback */
import PropTypes from 'prop-types';
import { React, useState, forwardRef } from 'react';
// @mui
import {
  Alert,
  AlertProps,
  Snackbar,
  Box,
  Card,
  Link,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
} from '@mui/material';
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

AShopStudentCard.propTypes = {
  Student: PropTypes.object,
};

export default function AShopStudentCard({ student }) {
  const { name, cover, status,avatarUrl } = student;
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledStudentImg alt={name} src={avatarUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap> {name} </Typography>
        </Link>
      </Stack>
    </Card>
  );
}
