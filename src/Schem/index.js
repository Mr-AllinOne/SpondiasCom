import * as yup from "yup";


export const validationShcema = yup.object().shape({
    email: yup.string().email("Please Enter Valid Email ").required("This field Required")
})