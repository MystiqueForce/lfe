import * as React from 'react';
import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';

import { Grid, Button, Card, CardContent, CardActions, Container, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';

import axios from 'axios';


export default function StudentAssignPage() {
  const [data, setData] = useState([]);
 
  const [openAssignment, setOpenAssignment] = useState(null);

  useEffect(() => {

    axios

      .get('https://lbwbw.onrender.com/assign')

      .then((response) => {

        // Handle the response data here

        setData(response.data);

        console.log(response.data);

      })

      .catch((error) => {

        // Handle any errors that occurred during the request

        console.error(error);

      });

  }, []);

  const handleClose = () => {
    setOpenAssignment(null);
    console.log("Dialog closed")
  };

  return (
    <>
      <Helmet>
        <title>students | Learnzy </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Your Assignments are here!
        </Typography>

        <Grid container spacing={3}>
          {Array.isArray(data) && data.map((assignment) => (
            <Grid key={assignment.id} item xs={12} sm={6} md={3}>
              <Card sx={{ width: 220, height: 220 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {assignment.subject}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {assignment.topic}
                  </Typography>
                </CardContent>
                <CardActions sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%'
                }}>
                  <Button size="small" variant='outlined'onClick={() => setOpenAssignment(assignment)}>
                    Learn More
                  </Button>
                  <Dialog open={openAssignment === assignment} onClose={handleClose} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                    <DialogTitle id='dialog-title'>{assignment.topic}</DialogTitle>
                    <DialogContent >
                      <DialogContentText id='dialog-description'>
                        {assignment.body}
                      </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary" variant="outlined">
                        Close
                      </Button>

                    </DialogActions>
                  </Dialog>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>


      </Container>
    </>
  );
}