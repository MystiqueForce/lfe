import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Grid, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Iconify from '../components/iconify';
import meetings from '../_mock/meetings';

export default function TutorMeetingPage() {

    return (

        <>
            <Helmet>
                <title>Meetings | Learnzy </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Your Meetings are Scheduled!
                </Typography>

                <Grid container spacing={3}>
                    {meetings.map((meeting) => (
                        <Grid key={meeting.id} item xs={12} sm={6} md={3}>
                            <Card sx={{ width: 255, height: 240 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar src={meeting.avatarUrl}/>
                                    }
                                    title={meeting.tutorName}
                                    subheader={meeting.subject}
                                />
                                <CardContent sx={{mb:1}}>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        Meeting ID : {meeting.meetingIds}
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        Password : {meeting.passwords}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%'
                                }}>
                                    <Link to='https://zoom.us/signin#/login' target="_blank" rel="noopener noreferrer">
                                    <Button size="small" variant='contained' startIcon={<Iconify icon="icons8:video-call" />} sx={{m:1}}>
                                        Start Meeting
                                    </Button>
                                    </Link>
                                
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>


            </Container>
        </>
        
    );
}