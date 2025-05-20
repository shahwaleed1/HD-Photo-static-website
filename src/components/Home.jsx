import React from 'react'
import './container.css'
import Card from './Card'
import { IoSearchOutline } from "react-icons/io5";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";
import { TbBadge2K } from "react-icons/tb";
import CardWhere from './CardWhere';
import { FaGears } from "react-icons/fa6";
import { LuWallpaper } from "react-icons/lu";
import profile_1 from '../assets/profile_1.jpeg'
import profile_2 from '../assets/profile_2.jpeg'
import profile_3 from '../assets/profile_3.jpeg'
import { IoMdBookmark } from "react-icons/io";
import Footer from './Footer';



const Home = () => {

    const userReviews = [
        {
            id: 1,
            name: 'jon',
            image: profile_1,
            work: 'UX/UI Desiger',
            comment: `Ya hoo HD Photo a best website for picture download. I'm very `
        },
        {
            id: 2,
            name: 'Samie',
            image: profile_2,
            work: 'UX/UI Desiger',
            comment: `Ya hoo HD Photo a best website for picture download. I'm very `
        },
        {
            id: 3,
            name: 'Shareei',
            work: 'UX/UI Desiger',
            image: profile_3,
            comment: `Ya hoo HD Photo a best website for picture download. I'm very `
        }
    ]


    return (
        <>
            <div className='custom-container h-screen flex items-center justify-between'>
                <div className='text-slate-800 w-1/2'>
                    <small className='bg-lime-200 p-1 px-3 rounded-full font-semibold text-lime-700'>Use in your Life</small>
                    <h1 className='text-6xl font-bold'>HD Photo</h1>
                    <div className='mt-6 '>
                        <p>Your ultimate destination for downloading high-quality HD photos for free. Explore a vast library of professionally curated images across categories like nature, travel, business, abstract, technology, and more. Each photo is available in full resolution with no watermarks, making them perfect for personal projects, blogs, websites, and commercial use. With fast downloads, easy navigation, and fresh content added regularly, finding the perfect HD picture has never been easier. Start downloading stunning, high-resolution images today—absolutely free! </p>
                    </div>
                    <div className='mt-12 text-white text-lg'>
                        <a href="https://hd-photos.vercel.app/" _blank className='px-6 py-3 me-10 rounded-full bg-[#5d3e58] hover:bg-[#51324b] transition'>Viste</a>
                        <a href="" className='px-6 py-3  rounded-full border-2 text-[#5d3e58] border-[#5d3e58] hover:bg-[#5d3e58] hover:text-white transition'>Download Apk</a>
                    </div>
                </div>
                <div>
                    <img className='w-sm' src="phone_2.png" alt="404" />
                </div>
            </div>

            <div className='custom-container text-slate-800 pb-20'>
                <h4 className='text-center text-3xl font-semibold'>What Features HD Photo?</h4>
                <div className='mt-10 flex justify-center flex-wrap gap-15'>
                    <Card icon={<IoSearchOutline className='text-2xl' />} title={'Search '} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laborum quae iure corporis harum voluptatem distinctio nisi molestias voluptate quos fuga quidem culpa saepe unde velit accusantium porro ex soluta?'} />
                    <Card icon={<HiMiniArrowTrendingUp className='text-2xl' />} title={'Daily Updated Pictures'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laborum quae iure corporis harum voluptatem distinctio nisi molestias voluptate quos fuga quidem culpa saepe unde velit accusantium porro ex soluta?'} />
                    <Card icon={<LuDownload className='text-2xl' />} title={'Download'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laborum quae iure corporis harum voluptatem distinctio nisi molestias voluptate quos fuga quidem culpa saepe unde velit accusantium porro ex soluta?'} />
                    <Card icon={<TbBadge2K className='text-2xl' />} title={'2K Resolution'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laborum quae iure corporis harum voluptatem distinctio nisi molestias voluptate quos fuga quidem culpa saepe unde velit accusantium porro ex soluta?'} />
                </div>
            </div>

            <div className="custom-container text-slate-800 h-[60vh]">
                <h3 className='text-3xl font-semibold text-center '>Where use it?</h3>
                <div className='flex justify-center gap-x-4 mt-20'>
                    <CardWhere icon={<FaGears className='text-4xl' />} title={'1.For Projects'} desp={'Designing base Projects.Hi there is may be a very use web designer Graphic designer.'} />
                    <CardWhere icon={<LuWallpaper className='text-4xl' />} title={'2.For Wallpapers'} desp={'Designing base Projects.Hi there is may be a very use web designer Graphic designer.'} />
                    <CardWhere icon={<FaGears className='text-4xl' />} title={'3.For Enterminte'} desp={'Designing base Projects.Hi there is may be a very use web designer Graphic designer.'} />
                </div>
            </div>

            <div className='custom-container text-slate-800 h-[60vh]'>
                <h3 className='text-center my-6 text-3xl font-semibold'>What People Are Saying</h3>
                <div className='flex items-center justify-center gap-5 mt-16'>
                    {userReviews.map((user) => (
                        <div key={user.id} className='w-sm p-4 rounded-lg shadow-xl hover:shadow-2xl transition border-s-4 border-orange-300 relative '>
                            <IoMdBookmark className='absolute -top-1 right-2 text-2xl text-orange-400' />
                            <div className='p-2 flex items-center gap-3'>
                                <img src={user.image} alt={user.name} className='w-20 h-20 rounded-full border-3 border-orange-300 p-1' />
                                <div>
                                    <h4 className='font-semibold text-lg'>{user.name}</h4>
                                    <p className='text-sm text-slate-500'>{user.work}</p>
                                </div>
                            </div>
                            <div className='ps-6 text-slate-700'>
                                <p>{user.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-white bg-gradient-to-r from-[#765170] to-[#4c2e46]'>
                <div className="custom-container h-[50vh] flex items-center gap-x-45">
                    <div className='w-1/2'>
                        <h3 className='text-2xl font-extrabold'>Share Your Experience.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt, tenetur, nam eos magnam nihil explicabo doloribus delectus, laborum praesentium aliquid laudantium voluptas reiciendis facilis officiis numquam distinctio? Dolorem, quas eum asperiores temporibus exercitationem molestias fugit at? Laudantium, numquam dolores?</p>
                    </div>
                    <div className='text-gray-300 '>
                        <input className="bg-[rgba(255,255,255,0.2)] p-2 rounded-lg min-w-sm outline-0 ps-3" type="email" placeholder='your.email@example.com' />
                        <textarea className='bg-[rgba(255,255,255,0.2)] block backdrop-blur-md  p-2 rounded-lg min-w-sm mt-2 resize-none outline-0 ps-3' type="text" placeholder='enter your message' rows={3}></textarea>
                        <a className='bg-[rgba(255,255,255,0.2)] block py-2 rounded-lg mt-2 text-center outline-0 font-semibold ps-4 border-b-3 border-[rgba(255,255,255,0.2)]' href="mailto:waleeddev4@gmail.com">Send Email</a>
                    </div>
                </div>
            </div>

            <div className='mt-4 text-slate-700 overflow-hidden'>
                <div className="custom-container flex items-center gap-x-12 h-[90vh]">
                    <div className='w-1/2'>
                        <h2 className='text-4xl font-bold'>Download Apk</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus mollitia nulla minima, aliquam temporibus, voluptatum maiores ut reiciendis veritatis quibusdam doloremque inventore autem, ab id voluptatibus unde ea aliquid cumque pariatur fuga laboriosam. Numquam velit hic alias aliquam, sapiente sequi quas ipsum minima veniam dolorum voluptatum doloribus, facilis natus nesciunt.</p>
                        <a href="#"><img className='w-50 mt-8 inline' src="downloads-btn-2.png" alt="Download Button" /></a>
                    </div>
                    <div className='w-1/2'>
                        <img className="h-[40rem] m-auto mt-22" src="phone_1.png" alt="" />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Home