import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required")
});

export const useSignInForm = ({ onSubmit }) => {
  return useFormik({
    initialValues: {
        username: '',
        password: ''
    }, onSubmit,
    validationSchema: Schema,
    validateOnBlur:true,
    validateOnChange:false
});
};
