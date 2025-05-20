import React from 'react'


const Card = ({ icon, title, para }) => {

    return (
        <div className='group p-6 w-xl shadow-2xl rounded-md relative overflow-hidden transition hover:scale-[1.1]'>
            {icon}
            <div className='cirle w-30 h-30 bg-orange-200 rounded-full absolute -top-12 -right-10 -z-10 transform transition duration-300 group-hover:scale-[10]'>
            </div>

            <div className='mt-5'>
                <h4 className='text-2xl font-semibold'>{title}</h4>
                <p>{para}</p>
            </div>
        </div>

    )
}

export default Card