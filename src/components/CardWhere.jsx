import React from 'react'



const CardWhere = ({ icon, title, desp }) => {
    return (
        <>
            <div className='w-sm shadow rounded-lg flex flex-col items-center p-3 hover:-translate-y-[3px] hover:bg-slate-50 transition '>
                <div className='relative -top-11 p-4 bg-amber-200 rounded-full'>{icon}</div>
                <h3 className='font-semibold text-lg'>{title}</h3>
                <p className='text-center px-2'>{desp}</p>
            </div>
        </>
    )
}

export default CardWhere