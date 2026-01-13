import { useField } from "formik"


const CustomSelect=({label, ...props})=>{

    const [field, meta]= useField(props);

    // console.log("field", field);
    // console.log("meta", meta);

    return(
        <>
            <label>{label}</label>
            {meta.touched && meta.error && <p className="error" >{meta.error}</p>}
            <select
                {...props}
                {...field}
                className={meta.touched && meta.error ? "input-error" : " "}
            />
        </>
    )

}

export default CustomSelect;