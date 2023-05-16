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

// utils
import { fCurrency } from '../../../utils/formatNumber';

// components
import Label from '../../../components/label';

import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledStudentImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopStudentCard.propTypes = {
  Student: PropTypes.object,
};

export default function ShopStudentCard({ student }) {
  const { name, cover, status, avatarUrl } = student;
  const [open, setOpen] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [showSnackbar, setShowSnackbar] = useState(false);

  // const SnackbarAlert = forwardRef(function (props, ref) {
  //   return <Alert elevation={6} ref={ref} {...props} />;
  // });

  // const handleFormSubmit = () => {
  //   setFormSubmitted(true);
  //   setOpen(false);
  //   setShowSnackbar(true);
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway')
  //     return
  //   setOpen(false)
  // }

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"

            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledStudentImg alt={name} src={avatarUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap> {name} </Typography>
        </Link>

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack> */}


        <Button sx={{ margin: 2, alignItems: 'left', backgroundColor: '#a200ff' }} variant="contained" onClick={() => setOpen(true)}>
          Initiate Call
        </Button>

        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
          <DialogTitle id='dialog-title'>Initiating Video Call</DialogTitle>
          <DialogContent >
            <DialogContentText id='dialog-description'>
              Provide Meeting ID and Password!
            </DialogContentText>
            <TextField label="ID" placeholder='Enter Meeting ID' variant='outlined' fullWidth sx={{ m: 1 }} />
            <TextField label="Password" placeholder='Enter Password' variant='outlined' fullWidth sx={{ m: 1 }} />
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' color='success' autoFocus onClick={()=>setOpen(false)} sx={{ m: 2 }} >
              Schedule Meet
            </Button>

          </DialogActions>

        </Dialog>
{/* 
        {formSubmitted && (
          <Snackbar
            open={showSnackbar}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}>
            <SnackbarAlert onClose={handleClose} severity='success'>
              Meeting will start as scheduled.
            </SnackbarAlert>
          </Snackbar>
        )} */}

      </Stack>
    </Card>
  );
}
