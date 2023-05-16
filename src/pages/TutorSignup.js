import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const TutorSignupPage = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    console.log("Dialog closed")
  };

  const handleRedirect = () => {
    handleClose();
    console.log("Dialog closed and redirected")
    window.location.href = "/";
    
  }
  
  const history = useNavigate();


  const [tutor,setUser] =useState({
    name:"",email:"",password:"",phone:"",age:""
  });


  let name
  let value
  const handleInputs=(e)=>{
   
    name=e.target.name;
    value =e.target.value;

    setUser({...tutor,[name]:value});
  }

 

  const PostData = async (e) => {
    setOpen(true);
    console.log('dialog opened')
    e.preventDefault();
    const {name,email,password,phone,age}=tutor;

    const res = await fetch("/registertutor",{
      

      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,password,phone,age
      })


    })

    const data = await res.json();

    if(data){
      console.log("registration successful");
      // history("/");
    }else{
      console.log("registration unsuccessful");
    }

    
    
  }  
  
  
  return (
    <div className="vector-parent">
    <img className="frame-child-t" alt="" src="/rectangle-88.svg" />
    <img
      className="microsoftteams-image-2-11"
      alt=""
      src="/microsoftteamsimage-2-1@2x.png"
    />
    <b className="sign-in">Tutor SignUp</b>
    {/* <div className="as-tutor">As Tutor</div> */}


    <form method="POST">

    <div className="input">
      <input className="input1" type="text" name ="name" value={tutor.name} onChange={handleInputs} id = "name" placeholder = "name"  />
      
      <div className="email">Name</div>
    </div>


    <button className="button-t"  type ="submit" name ="signup" value ="register" id = "signup" onClick={PostData}>
      <div className="button-child-s" /> 
      <div className="log-in">
      Sign Up
      </div>  
    </button>
    <Dialog open={open} onClose={handleClose} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title' sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon style={{ color: 'green', mr:1}} />
          <Typography>
            Thank You!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Your profile is now being reviewed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Close
          </Button>
          <Button onClick={handleRedirect} color="primary" variant="outlined">
            Go to homepage
          </Button>
        </DialogActions>
      </Dialog>


    <div className="input2">
      <input className="inpute" type="text"  name ="email" value={tutor.email} onChange={handleInputs} id = "email" placeholder = "email" />
     
      <div className="password">Email</div>
    </div>


    <div className="input3">
      <input className="inputp" type="password"  name ="password" value={tutor.password} onChange={handleInputs} id = "password" placeholder = "password" />
      
      <div className="password">Password</div>
    </div>


    <div className="input4">
      <input className="inputcp" type="Number"  name ="phone" value={tutor.phone} onChange={handleInputs} id = "phone" placeholder = "phone no." />
      
      <div className="password">Phone No.</div>
    </div>


    <div className="input5">
      <input className="inputa" type="text"  name ="age" value={tutor.age} onChange={handleInputs} id = "age" placeholder = "subject"/>
      
      <div className="password">Subject</div>
    </div>
    

    </form>

  </div>


);
};


export default TutorSignupPage;
