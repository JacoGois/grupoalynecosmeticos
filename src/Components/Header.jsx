import React from 'react'


const Header = ({ onOpenSidebar }) => {
  return (
    <header className='bg-white min-h-[20vh] flex justify-center sm:justify-between items-center px-12'>
        <button  className='w-48 h-w-48'>
            <a href="https://grupoalynecosmeticos.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="https://grupoalynecosmeticos.com.br/wp-content/uploads/2021/03/grupoalyne.png" alt="" srcset="" />
            </a>
        </button>
        <button onClick={onOpenSidebar} className='hidden sm:inline-block w-12 h-12 mb-8' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-black hover:text-gray-800'>
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </header>
  )
}

export default Header