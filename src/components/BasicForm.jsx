import React from 'react'
import { useFormik ,Formik,Field} from 'formik';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';



function BasicForm() {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  
  function validateUsername(value) {
    let error;
    if (value === 'admin') {
      error = 'Nice try!';
    }
    return error;
  }


  return (
    <>
    <Row>
      <Col className="col-sm-12 col-md-6 offset-md-3">
      <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         username: '',
         email: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form>
           <Field name="email" validate={validateEmail} />
           {errors.email && touched.email && <div>{errors.email}</div>}
 <hr></hr>
           <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}
 
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
      
      </Col>
    </Row>
      
    </>
  )
}

export default BasicForm
