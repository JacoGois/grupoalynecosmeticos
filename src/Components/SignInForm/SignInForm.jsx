import Field from '../Field'
import React from 'react'
import Hidden from '../Hidden'
import { Link } from 'react-router-dom'

const SignInForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors
}) => {

    return (
        <form onSubmit={handleSubmit} className="max-w-lg w-[90vw] mx-auto h-full flex flex-col justify-center mt-[2vw] px-4 py-12 border shadow-lg ">
            <h3 className="text-lg text-center font-bold">Sign in</h3>
            <div className="space-y-4 font-bold">
                <Field 
                    label="Username"
                    type="username"
                    name="username"
                    value={values.username}
                    placeholder="your username"
                    onChange={handleChange}
                    errorMessage={errors.username}
                 />
                <Hidden
                    label="Password"
                    name="password"
                    value={values.password}
                    placeholder="your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.password}
                />
                    <button
                        type="submit"
                        className="text-white font-bold bg-[#001f5f] px-4 py-4 rounded-lg w-full"
                    >
                        Sign In
                    </button>
            </div>
        </form>
    )
}

export default SignInForm
