import { useField } from "formik"


export  const CustomInput=({label, ...props})=>{

    const [field, meta]= useField(props);

    // console.log("field", field);
    // console.log("meta", meta);

    return(
        <>
            <label>{label}</label>
            {meta.touched && meta.error && <p className="error" >{meta.error}</p>}
            <input
                {...props}
                {...field}
                className={meta.touched && meta.error ? "input-error" : " "}
            />
        </>
    )

}