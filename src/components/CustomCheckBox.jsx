import { useField } from "formik"


const CustomCheckBox=({label, ...props})=>{

    const [field, meta]= useField(props);

    // console.log("field", field);
    // console.log("meta", meta);

    return(
        <>
            {meta.touched && meta.error && <p className="error" >{meta.error}</p>}
            <div className="checkbox">
                <input
                    {...props}
                    {...field}
                    className={meta.touched && meta.error ? "input-error" : " "}
                />
                <span>I accept the Tarms of Service </span>
            </div>
            
            
        </>
    )

};

export default CustomCheckBox;