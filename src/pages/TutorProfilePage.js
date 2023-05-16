import { useState, props } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
    styled,
    Box,
    Card,
    Grid,
    Table,
    Stack,
    Avatar,
    Button,
    Container,
    Typography,
    TextField,
} from '@mui/material';
import { height } from '@mui/system';


export default function TutorProfilePage() {

    
  const jwtoken = document.cookie
  .split('; ')
  .find((cookie) => cookie.startsWith('jwtoken='))
  ?.split('=')[1];

console.log(jwtoken);


fetch('/usecookie', {
  headers: {
    Authorization: `Bearer ${jwtoken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    setTutor(data);
    // Process the response data containing the document values
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });


    const ProfilePic = styled('img')`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.5);
  `;

    ProfilePic.defaultProps = {
        src: '/assets/images/tutors/tutor_14.jpg',
    };


    const StyledAvatar = styled('div')(({ theme }) => ({
        width: 200,
        height: 200,
        margin: 'auto',
        marginTop: 5,
        marginBottom: 2,
    }));



    const StyledEditButton = styled('button')(({ theme }) => ({
        margin: 4,
        backgroundColor: '#a200ff'
    }));


    const [tutor, setTutor] = useState({
        name: '',
        location: '',
        gender: '',
        age: '',
        subject: '',
        bio: '',
        rate: '',
        experience: '',
        profilePic: null,
    });

    const [isEditMode, setIsEditMode] = useState(false);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'file' ? target.files[0] : target.value;
        const name = target.name;

        setTutor((prevTutor) => ({
            ...prevTutor,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const { name, age } = tutor;

        // const res = await fetch("/editprofile", {


        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name, age
        //     })


        // })
        // console.log(tutor);
        // setIsEditMode(false);
    };

    const handleEditClick = async (e) => {
        e.preventDefault();
        setIsEditMode(true);
    };

    const renderForm = () => {
        return (
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Update Profile
                </Typography>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={12} item>
                        <Typography variant='h6' sx={{ mb: 1 }}>
                            Update Photo
                        </Typography>
                        <TextField
                            type='file'
                            variant='outlined'
                            fullWidth
                            value={tutor.profilePic}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            label='Name'
                            name='name'
                            placeholder='Enter Name'
                            variant='outlined'
                            value={tutor.name}
                            fullWidth

                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='location'
                            label='Location'
                            placeholder='Enter Location'
                            variant='outlined'
                            value={tutor.location}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='gender'
                            label='Gender'
                            placeholder='Enter Gender'
                            variant='outlined'
                            value={tutor.gender}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='age'
                            label='Age'
                            placeholder='Enter Age'
                            variant='outlined'
                            value={tutor.age}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='subject'
                            label='Subject'
                            placeholder='Enter Subject'
                            variant='outlined'
                            value={tutor.subject}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='bio'
                            label='Bio'
                            placeholder='Enter Bio'
                            variant='outlined'
                            value={tutor.bio}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='experience'
                            label='Experience'
                            placeholder='Enter Experience'
                            variant='outlined'
                            value={tutor.experience}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='rate'
                            label='Rate'
                            placeholder='Enter Rate'
                            variant='outlined'
                            value={tutor.rate}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                        <Button
                            sx={{ margin: 2, padding: 1, justifyContent: 'left', backgroundColor: '#a200ff' }}
                            variant="contained"
                            onClick={handleSubmit}>
                            Save Profile
                        </Button>
                    </Grid>
                </Grid>
            </Container>

        );
    };



    const TutorDetails = () => {
        return (
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    My Profile
                </Typography>
                <form method="GET">
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={4}>
                            <ProfilePic sx={{ backgroundColor: 'gray' }} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='h3' sx={{ mb: 1, color: '#9100e6' }} >
                                {tutor.name}
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: 500 }}>
                                {tutor.location}, India
                            </Typography>
                            <Typography variant='h5'>
                                {tutor.experience} of {tutor.subject} EDUCATOR - Specialized in IIT-JEE || SAT || AP || GRE || CBSE || ISC || IGCSE || IB
                            </Typography>
                            <Typography variant='h5' sx={{ fontWeight: 700, marginTop: 2 }} >
                                Bio
                            </Typography>
                            <Typography variant='body2' >
                                {tutor.bio}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ marginTop: 2 }} justifyContent="ceter" alignItems="center">
                        <Grid item xs={3} >
                            <Typography variant='button' sx={{ fontWeight: 200 }}>
                                {tutor.gender}, {tutor.age} Years
                            </Typography>
                            <Typography variant='h6'>
                                {tutor.subject}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} >
                            <Typography variant='h3'>
                                ${tutor.rate}
                            </Typography>
                            <Typography variant='subtitle1' color='#9100e6'>
                                Hourly Rate
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='h3'>
                                40
                            </Typography>
                            <Typography variant='subtitle1' color='#9100e6'>
                                Classes Taken
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='h3'>
                                12
                            </Typography>
                            <Typography variant='subtitle1' color='#9100e6'>
                                Videos
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button
                        sx={{ margin: 2, alignItems: 'left', backgroundColor: '#a200ff' }}
                        variant="contained"
                        onClick={handleEditClick}>
                        Edit Profile
                    </Button>
                </form>


            </Container>
        );
    };


    return (

        <Container sx={{ marginTop: 8 }}>

            {isEditMode ? (
                renderForm()
            ) : (
                <TutorDetails />
            )}
        </Container>
    );
}