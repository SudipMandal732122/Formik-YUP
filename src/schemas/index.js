import * as yup from "yup";

const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/;
//Password must be at least 5 characters and include uppercase, lowercase, and a number

export const basicSchema=yup.object().shape({

    email:yup.string().email("Please enter a valid email").required("Required"),
    age:yup.number().positive().integer().required("Required"),
    password:yup.string()
        .min(5)
        .matches(passwordRule, {message: "Please create a strong password"})
        .required("Required"),
    conformPassword:yup.string()
        .oneOf([yup.ref("password"), null], "Password should be match")
        .required("Required"),

});