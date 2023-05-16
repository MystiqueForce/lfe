// ----------------------------------------------------------------------

const account = {

    
    displayName: 'Ramya Priya',
    email: 'ramyapriya@gmail.com',
    photoURL: '/assets/images/students/student_18.jpg',
  };
  

  
  const jwtoken = document.cookie
  .split('; ')
  .find((cookie) => cookie.startsWith('jwtoken='))
  ?.split('=')[1];

console.log(jwtoken);

// if(jwtoken){
    
// fetch('/usecookiestudent', {
//     headers: {
//       Authorization: `Bearer ${jwtoken}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//         account.displayName = data.name;
//         account.email = data.email;
        
//       // Process the response data containing the document values
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle errors
//       console.error(error);
//     });
  



  export default account;
  
