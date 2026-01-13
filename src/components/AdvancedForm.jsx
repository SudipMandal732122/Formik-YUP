import { Field, Form, Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";

const AdvancedForm = () => {
  const onSubmit=async (values,actions)=>{
    console.log("Form Submit");
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve)=> setTimeout(resolve,2000));
    actions.resetForm();

  }
  return (
    <Formik
      initialValues={{ username: "", jobType:"", acceptedTos:true   }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
       {props => (
         <Form>
          {/* <Field name="name" placeholder="name" type="text" /> */}

          <CustomInput
            name="username"
            type="text"
            label="User Name"
            placeholder="Enter your Username"

          />
          <CustomSelect
            name="jobType"
            label="Job Type"
            placeholder="Please select a job type"

          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>

          </CustomSelect>

          <CustomCheckBox
            name="acceptedTos"
            type="checkbox"

          />

           <button disabled={props.isSubmitting} type="submit">Submit</button>
         </Form>
       )}
     </Formik>
  );
};
export default AdvancedForm;