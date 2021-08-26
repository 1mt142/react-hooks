import React from 'react';
import { useFormik } from 'formik';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';


 const LocalStore = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));

// for (var prop in testObject) {
//     console.log('  ' + prop + ': ' + testObject[prop]);
// }
// let myFirstName = encrypt(values.firstName);   


     localStorage.setItem('myFirstName', values.firstName);
     localStorage.setItem('myLastName', values.lastName);
     localStorage.setItem('myEmail', values.email);

     },
   });

   var myFirstName = localStorage.getItem('myFirstName');
   console.log("myFirstName:",myFirstName);
   
   var myLastName = localStorage.getItem('myLastName');
   console.log("myLastName:",myLastName); 
   
   var myEmail = localStorage.getItem('myEmail');
   console.log("myEmail:",myEmail);



   return (
     <>
     <div>
   
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
     </div>
     </>
   );
 };
 export default LocalStore;
