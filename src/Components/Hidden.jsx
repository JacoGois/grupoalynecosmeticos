import React, { useState } from 'react'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'
import EyeSlashIcon from '@heroicons/react/24/outline/EyeSlashIcon'

const Hidden = ({ label, errorMessage, ...rest }) => {

    const [show, setShow] = useState(false)
    const [see, setSee] = useState("password")


    const toggle = () => {
        setShow(!show)
        if (see === "password") {
            setSee("text")
        } else if(see === "text"){
            setSee("password")
        }
    }

    return (
        <div className="flex flex-col space-y-2">
            <label>{label}</label>
            <div className='flex bg-white border border-gray-300 rounded-md mt-1 w-full overflow-hidden items-stretch relative'>
                <input
                    className="flex-1 px-2 py-3 text-sm mr-12 border-0"
                    type={see}
                    {...rest}
                />
                <button
                    tabIndex={0}
                    type="button"
                    onClick={toggle}
                    className="text-gray-500 w-12 hover:bg-gray-200 focus:bg-gray-200 h-full flex items-center justify-center cursor-pointer absolute right-0"
                >
                    {show ? <EyeIcon className='w-8 h-8' /> : <EyeSlashIcon className='w-8 h-8' />}
                </button>
            </div>
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
    )
}

export default Hidden