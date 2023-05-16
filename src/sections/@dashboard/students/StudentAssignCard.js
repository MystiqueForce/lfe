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
  CardContent,
  CardActions,
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


// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

StudentAssignCard.propTypes = {
  Assignment: PropTypes.object,
};

export default function StudentAssignCard({ assignment }) {
  const { id, subject, topic, body } = assignment;
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
    <Card sx={{ width: 220, height: 220 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {subject}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {topic}
        </Typography>
      </CardContent>
      <CardActions sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
        <Button size="small" variant='outlined' onClick={()=>setOpen(true)}>
          Learn More
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
          <DialogTitle id='dialog-title'>{topic}</DialogTitle>
          <DialogContent >
            <DialogContentText id='dialog-description'>
              {body}
            </DialogContentText>
            
          </DialogContent>

        </Dialog>
      </CardActions>
    </Card>
  );
}
