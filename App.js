import React from "react";
import './index.css'
// TODO: import useFormik from formik library
import { useFormik } from "formik";
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    
    validate: values => {     
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.email) errors.email = 'Field required';
      return errors;
  }});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input id="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
        <button id="button" type="submit">Submit</button>
      </form>
          
    
    </div>
  );
}

export default App;
