

import  { useFormik }  from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () => {

  const onSubmit=async (values,actions)=>{
    console.log("Form Submit");
    console.log(values);
    console.log(actions);
    await new Promise((resolve)=> setTimeout(resolve,2000));
    actions.resetForm();

  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit}
  = useFormik({
    initialValues: {
      email:"",
      age:"",
      password:"",
      conformPassword:"",
    },
    validationSchema:basicSchema,
    onSubmit,
  });

  // console.log(formik);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      
      {errors.email && touched.email && <p className="error" >{errors.email}</p>}

      <input 
        id="email" 
        type="email" 
        placeholder="Enter your email" 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : " "}
      />
      <label htmlFor="age">Age</label>
      {errors.age && touched.age && <p className="error" >{errors.age}</p>}
      <input 
        id="age" 
        type="number" 
        placeholder="Enter your age" 
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : " "}
      />
      <label htmlFor="password">Password</label>
      {errors.password && touched.password && <p className="error" >{errors.password}</p>}
      <input 
        id="password" 
        type="password" 
        placeholder="Enter your password" 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : " "}
      />
      <label htmlFor="conformPassword">Conform Password</label>
      {errors.conformPassword && touched.conformPassword && <p className="error" >{errors.conformPassword}</p>}
      <input 
        id="conformPassword" 
        type="password" 
        placeholder="conform your password" 
        value={values.conformPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.conformPassword && touched.conformPassword ? "input-error" : " "}
      />
      <button disabled={isSubmitting}  type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;