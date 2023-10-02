import { Form, useFormik } from 'formik'
import { validationShcema } from '../../../Schem/index'
import React from 'react'

const UserForm = () => {

    const onSubmit = async (values, actions) => {
        console.log("AM Action", actions)
        // console.log("AM Value", values)

        console.log("Submiting...")
        await new Promise((resolve) => (setTimeout(resolve, 10000)))
        actions.resetForm()

    }

    const { values, errors, touched, isSubmitting, handleBlur, handleReset, handleSubmit, handleChange, } = useFormik({
        initialValues: {
            email: "",
            name: ""
        },
        validationSchema: validationShcema,
        onSubmit,
        // onsubmit: {
        //     console.log('')
        // }
    })
    // console.log(Formik.values)
    return (
        <form autoComplete='off' onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center space-y-4  userBack w-[50%] rounded-r-lg'>
            <input
                id='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Name'
                className='w-[300px] py-2 pl-2 rounded-[4px] placeholder:italic placeholder:pl-2 focus:outline-none focus:border-black-500'
            />
            <input
                id='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Email'
                className={errors.email && touched.email ? "border-2 border-rose-600 w-[300px]  py-2 pl-2  rounded-[4px]  focus:outline-none placeholder:italic placeholder:pl-2  " : `w-[300px]  py-2 pl-2  rounded-[4px] focus:outline-none placeholder:italic placeholder:pl-2 `}
            />
            {errors.email && touched.email ? <p className='text-rose-600'>{errors.email}</p> : ""}
            <input type='text' placeholder='Message' className=' w-[300px] pl-2   h-[100px] rounded-[4px] focus:outline-none placeholder:italic placeholder:pl-2 ' />
            <button disabled={isSubmitting ? " bg-[#29A9E2] opacity-20 " : ""} type='submit' className='bg-[#29A9E2]  text-white rounded-[4px] px-10 py-[5px]'>
                Send Message
            </button>


        </form>
    )
}

export default UserForm
