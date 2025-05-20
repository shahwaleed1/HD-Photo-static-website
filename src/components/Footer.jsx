import React from 'react'
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gradient-to-l from-slate-800 to-slate-500 text-white py-6'>
            <div className="custom-container flex items-center justify-between">
                <div className='flex items-center flex-col gap-y-2'>
                    <img className='w-[4rem] rounded-full' src="footer_admin_pic.png" alt="developer pic" />
                    <h5>Waleed Shah | Frontend Developer</h5>
                    <a className='py-1 px-3 bg-slate-600 rounded-full' href='https://github.com/shahwaleed1' target='_blank'><FaGithub className='inline mb-1' /> follow</a>
                </div>
                <div className='text-center'>
                    <p>Copyright-2025 @ All rights reserved.</p>
                    <p>Designed By Waleed Shah</p>
                </div>
                <div>
                    <p>Follow me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer