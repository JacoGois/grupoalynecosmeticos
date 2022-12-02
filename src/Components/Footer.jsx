import React from 'react'
import { Link } from 'react-router-dom';
import alyne  from "../images/alyne.jpg";

const Footer = () => {
  return (
    <footer class="bg-[#001f5f] pb-5 absolute w-[100%] bottom-0">
        <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex justify-center text-teal-300 sm:justify-start">
                    <img className='w-20 ' src={alyne} />
                </div>
                <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                    T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer