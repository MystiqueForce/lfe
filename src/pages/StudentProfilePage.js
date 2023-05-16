
import { useState, props } from 'react';

import {
    styled,
    Box,
    CircularProgress,
    Card,
    Grid,
    Table,
    Stack,
    Avatar,
    Button,
    Container,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    List,
    ListItem
} from '@mui/material';
import { bgcolor, height } from '@mui/system';
import { purple } from '@mui/material/colors';


import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";



export default function StudentProfilePage() {



    const jwtoken = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith('jwtoken='))
        ?.split('=')[1];

    console.log(jwtoken);



    fetch('/usecookiestudent', {
        headers: {
            Authorization: `Bearer ${jwtoken}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setStudent(data);
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
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.5);
    `;






    // const [selectedSubjects, setSelectedSubjects] = useState([]);

    // const handleSubjectChange = (event) => {
    //     const { value, checked } = event.target;
    //     if (checked) {
    //       setSelectedSubjects((prevSelectedSubjects) => [
    //         ...prevSelectedSubjects,
    //         value,
    //       ]);
    //     } else {
    //       setSelectedSubjects((prevSelectedSubjects) =>
    //         prevSelectedSubjects.filter((subject) => subject !== value)
    //       );
    //     }
    //   };


    ProfilePic.defaultProps = {
        src: '/assets/images/students/student_11.jpg',
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


    const [student, setStudent] = useState({
        name: '',
        gender: '',
        subject: [''],
        email: "",
        class: '',
        age: '',
        gpa: '',
        medium: '',
        profilePic: null,
    });



    const [isEditMode, setIsEditMode] = useState(false);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'file' ? target.files[0] : target.value;
        const name = target.name;

        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // const updatedstudent = {
        //     ...student,
        //     subjects: selectedSubjects,
        // };
        console.log(student);
        setIsEditMode(false);
    };



    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const renderForm = () => {
        const subjects = ['Physics',
            'Mathematics',
            'Chemistry',
            'Economics',
            'Video-Editing',
            'Biology',
            'English',
            'Java',
            'Accounting',
            'Python'];
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
                            value={student.profilePic}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            label='Name'
                            name='name'
                            placeholder='Enter Name'
                            variant='outlined'
                            value={student.name}
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
                            value={student.gender}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    {/* <Grid xs={12} sm={6} item>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            Select Subjects
                        </Typography>  
                    </Grid>
                     <Grid xs={12} sm={6} item>
                        <label htmlFor="subject">Subject</label>
                        <select
                            name="subject"
                            id="subject"
                            value={student.subject}
                            onChange={handleInputChange}
                            aria-label="Select a subject"
                        >
                            <option value="">-- Select a subject --</option>
                            <option value="math">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                        </select>
                    </Grid>  */}
                    <Grid xs={12} sm={6} item>
                        <FormControl variant='outlined' fullWidth>
                            <InputLabel id='subject-label'>Subject</InputLabel>
                            {/* <Select
                                labelId='subject-label'
                                name='subject'
                                multiple
                                value={student.subject}
                                onChange={handleInputChange}
                                renderValue={(selected) => selected.join(', ')}
                                label='Subject'
                            >
                                {[subjects].map((subject) => (
                                    <MenuItem key={subject} value={subject}>
                                        {subject}
                                    </MenuItem>
                                ))}
                            </Select> */}
                        </FormControl>
                    </Grid>

                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='email'
                            label='email'
                            name='email'
                            placeholder='Enter email'
                            variant='outlined'
                            value={student.email}
                            fullWidth

                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='class'
                            label='Class'
                            placeholder='Enter Class'
                            variant='outlined'
                            value={student.class}
                            fullWidth
                            inputProps={{ min: 1, max: 12 }}
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
                            value={student.age}
                            fullWidth
                            inputProps={{ min: 1, max: 150 }}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='gpa'
                            label='GPA'
                            placeholder='Enter GPA'
                            variant='outlined'
                            value={student.gpa}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='medium'
                            label='Medium of Instruction'
                            placeholder='Enter Medium of instruction'
                            variant='outlined'
                            value={student.medium}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    {/* <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='rate'
                            label='Rate'
                            placeholder='Enter Rate'
                            variant='outlined'
                            value={student.rate}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid> */}
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



    const StudentDetails = () => {
        if (!student) {
            return (<Box sx={{ display: 'flex' }} >
                <CircularProgress />
                <Typography variant='h3' color='#9100e6' sx={{ml:2}}>
                    Loading ...
                </Typography>
            </Box>
            );
        }
        return (
            <Container>
                <Typography variant="h3" sx={{ mb: 5 }}>
                    My Profile
                </Typography>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={4}>
                        <ProfilePic sx={{ backgroundColor: 'gray' }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='h3' sx={{ mb: 1, color: '#9100e6' }} >
                            {student.name}
                        </Typography>
                        <Grid item xs={3} >
                            <Typography variant='button' sx={{ fontWeight: 200 }}>
                                {student.gender}, {student.age} Years
                            </Typography>
                        </Grid>
                        <Typography variant='h6' >
                            {student.email}
                        </Typography>
                        {/* <Typography variant='h5'>
                            {student.experience} of {student.subject} 
                        </Typography> */}
                        <Typography variant='h5' sx={{ marginTop: 2 }} >
                            {/* Bio */}
                        </Typography>
                        {/* <Typography variant='body2' >
                            {student.bio}
                        </Typography> */}
                    </Grid>
                </Grid>
                {/* <Grid container spacing={4} sx={{ margin:2 }} justifyContent="ceter" alignItems="center">
                    <Grid item xs={3} > 
                        <Typography variant='h3'>
                            {student.class}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='h3'>
                            {student.class}th Grade
                        </Typography>
                        <Typography variant='h4' color='#9100e6'>
                            Class/Std
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='h3'>
                            {student.gpa}
                        </Typography>
                        <Typography variant='h5' color='#9100e6'>
                            GPA
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                   
                    <Typography variant='h3'>
                        {student.subject}
                       
                    </Typography>
                    <Typography variant='h5' color='#9100e6'>
                        Subjects
                    </Typography>
                 
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h3'>
                            {student.medium}
                        </Typography>
                        <Typography variant='h5' color='#9100e6'>
                            Medium of instruction
                        </Typography>
                    </Grid>
                </Grid> */}

                <Grid container spacing={4} sx={{ marginTop: 2 }} >

                    <Grid item xs={3} >
                        <Typography variant='subtitle1' color='#9100e6'>
                            Class/Std
                        </Typography>
                        <Typography variant='h3' >
                            {student.class}
                        </Typography>

                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='subtitle1' color='#9100e6'>
                            GPA
                        </Typography>
                        <Typography variant='h3'>
                            {student.gpa}
                        </Typography>

                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' color='#9100e6'>
                            Medium of Instruction
                        </Typography>
                        <Typography variant='h3'>
                            {student.medium}
                        </Typography>

                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' color='#9100e6'>
                            Subject
                        </Typography>
                        <List>
                            {[student.subject].map((sub) => (
                                <ListItem key={sub}>
                                    <Typography variant='h3' sx={{ mt: 0 }}>{sub}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Button
                    sx={{ margin: 2, alignItems: 'left', backgroundColor: '#a200ff', fontSize: '15px' }}
                    variant="contained"
                    onClick={handleEditClick}>
                    Edit Profile
                </Button>



            </Container >
        );
    };


    return (

        <Container sx={{ marginTop: 8 }}>

            {isEditMode ? (
                renderForm()
            ) : (
                <StudentDetails />
            )}
        </Container>
    );

}
