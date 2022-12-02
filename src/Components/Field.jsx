import React from 'react'

const Field = ({ label, errorMessage, ...rest }) => {
    return (
        <div className="flex flex-col space-y-2 ">
            <label>{label}</label>
            <div className='flex bg-white border border-gray-300 rounded-md mt-1 w-full overflow-hidden items-stretch relative '>
                <input
                    className="flex-1 px-2 py-3 text-sm border-0 "
                    {...rest}
                />
            </div>
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
    )
}

export default Field