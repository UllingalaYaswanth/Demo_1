import React from 'react'
import logo from '../assets/logo.jpeg'

function Footer() {
  return (
    <div className='w-full bg-[#263238] mt-[180px] flex items-center justify-center p-10 flex-col'>
        <div className='max-w-7xl w-full pt-3'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 '>
            <div className='space-y-3'>
                <a href='' className='flex items-center gap-3'><img src={logo} className='w-14'/><span className="text-white font-bold text-4xl">INTELLIOD</span></a>
                <p className='text-white'>Copyright © 2020 Landify UI Kit.</p>
                <p className='text-white'>All rights reserved</p>
            </div>
            <div className='text-white flex flex-col space-y-1'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <a>About Us</a>
                <a>Contact Us</a>
                <a>Pricing</a>
                <a>How it works</a>
                <a>Docs</a>
            </div>
            <div className='text-white flex flex-col space-y-1'>
                <h1 className='text-xl font-semibold'>Resources</h1>
                <a>Help Center</a>
                <a>Term of Service</a>
                <a>Legal</a>
                <a>Privacy Policy</a>
                <a>See all resources</a>
            </div>
            <div className='text-white flex flex-col space-y-1'>
                <h1 className='text-xl font-semibold'>About</h1>
                <a>Terms & Conditions</a>
                <a>Privacy policy</a>
            </div>
            </div>
            
        </div>
        <hr className='mt-10 w-full'/>
        <p className='text-center mt-4 text-white text-lg font-semibold'>Copyright © 2021 Peush Jha</p>
    </div>
  )
}

export default Footer