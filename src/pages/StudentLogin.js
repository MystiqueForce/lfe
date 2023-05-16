import { Link ,NavLink,useNavigate} from "react-router-dom";
import react,{useState} from 'react';
import "./Login.css";

const StudentLoginPage = () => {

  const history = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  
  // let name
  // let value
  // const handleInputs=(e)=>{
   
  //   name=e.target.name;
  //   value =e.target.value;

  //   setUser({...student,[name]:value});
  // }


  
  const PostData = async (e) => {

    e.preventDefault();
    // const {email,password}=student;

    const res = await fetch("/login",{


      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })


    })

    const data = await res.json();

    if(data){
      console.log("login successful");
       history("/studentdash/app");
    }else{
      console.log("registration unsuccessful");
    }

    

  }  




  return (
    <div className="vector-parent">
      <img className="frame-child" alt="" src="/rectangle-88.svg" />
      <img
        className="microsoftteams-image-2-1"
        alt=""
        src="/microsoftteamsimage-2-1@2x.png"
      />
      <b className="sign-in">Student Sign In</b>
      {/* <div className="as-tutor">As Student</div> */}



<form method="POST">
      <div className="input">
        <input className="input1" type="text"  name ="email" value={email} onChange={(e)=>setEmail(e.target.value)} id = "email" placeholder = "email"   />
      
        <div className="email">Email</div>
      </div>
      <button className="button" type ="submit" name ="signup" value ="register" id = "signup" onClick={PostData}>
        <div className="button-child" />
        <div className="log-in">
        
            Sign In
          
        </div>
      </button>

      {/* <img className="frame-item" alt="" src="" />
      <div className="dont-have-a">{`Don’t Have a Account ? `}</div>
      <button className="button1" >
        <div className="button-child" />
        <div className="sign-up">
          <p className="sign-in-with">
            <Link
              to="/StudentSignup"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </button> */}
      <div className="input2">
        <input className="input1" type="password" name ="password" value={password} onChange={(e)=>setPassword(e.target.value)} id = "password" placeholder = "password"/>
       
        <div className="password">Password</div>
      </div>


      </form>

    </div>
  );
};

export default StudentLoginPage;
