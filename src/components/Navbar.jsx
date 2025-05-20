import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='p-4 flex justify-between items-center backdrop-blur-xs'>
                <div className='logo flex items-center gap-2.5'>
                    <img className='w-[2.2rem]' src="/logo.png" alt="" />
                    <span className='font-semibold'>HD Photo</span>
                </div>
                <div className=''>
                    <a href='' className='mx-2'>Home</a>
                    <a href="" className='mx-2'>About</a>
                    <a href="" className='mx-2'>Blog</a>
                    <a href="" className='mx-2'>Contect us</a>
                    <button className='rounded-full border p-1'>mode</button>
                    <a className='ms-6 border px-4 py-3 rounded-full' href="">Download</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar