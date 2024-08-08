import React from 'react'
import img1 from '../assets/img1.png'
import Marquee from "react-fast-marquee";
import img2 from '../assets/img2.png'

function Home() {
  return (
    <div className='max-w-full'>
        <div className='bg-[#f5f7fa] w-full flex items-center justify-center'>
            <div className='max-w-7xl w-full grid md:grid-cols-2 flex items-center justify-center py-24 lg:px-0 sm:px-10'>
                <div className='space-y-4'>
                    <h1 className='lg:text-5xl sm:text-4xl text-3xl font-semibold text-gray-700'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                    <p className='text-sm text-gray-500'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='bg-[#4CAF4F] px-5 py-2.5 text-white font-semibold rounded-md'>Register</button>
                </div>
                <div>
                    <img src={img1}/>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-8'>
            <div className='max-w-7xl w-full flex flex-col items-center justify-center p-4'>
                <div className='flex flex-col items-center space-y-3 mb-8'>
                    <h1 className='font-semibold text-4xl text-gray-700'>Our Clients</h1>
                    <p className='text-sm text-gray-500'>We have been working with some Fortune 500+ clients</p>
                </div>
                <Marquee autoFill pauseOnHover speed={100}>
                <div className="flex flex-wrap justify-center gap-16">
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a591f814daea6cfd7d4_Logo.png" alt="Logo 1" className="w-24 h-auto" loading="lazy"/>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a590fec89c5daddc95c_Logo-6.png" alt="Logo 2" className="w-24 h-auto" loading="lazy"/>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a5987fd2bc0f40047b4_Logo-5.png" alt="Logo 3" className="w-24 h-auto" loading="lazy"/>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a59da280d820e545040_Logo-1.png" alt="Logo 4" className="w-24 h-auto" loading="lazy"/>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a596d1a88501e9e74c4_Logo-3.png" alt="Logo 5" className="w-24 h-auto" loading="lazy"/>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a59f9e16439eb4768d9_Logo-2.png" alt="Logo 6" className="w-24 h-auto" loading="lazy"/>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788a59e4e3c143763fc259_Logo-4.png" alt="Logo 7" className="w-24 h-auto mr-16" loading="lazy"/>
                </div>
                </Marquee>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
            <div className='max-w-7xl flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-4xl text-gray-700 mb-2 text-center'>Manage your entire community in a single system</h1>
                <p className='text-sm text-gray-500'>We have been working with some Fortune 500+ clients</p>
                <div className='grid lg:grid-cols-3 gap-4 mt-12'>
                    <div className='bg-[#f5f7fa] flex flex-col items-center justify-center p-7'>
                        <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788eb8f40def8d26fdd7f5_Icon.png" loading="lazy" alt="" className='mb-3'/>
                        <h1 className='text-2xl font-semibold text-center mb-2'>Membership Organisations</h1>
                        <p className='text-sm text-gray-600 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='bg-[#f5f7fa] flex flex-col items-center justify-center p-7'>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788eb8e0f5b67d241b98a4_icon%201.png" loading="lazy" alt="" className='mb-3'/>
                        <h1 className='text-2xl font-semibold text-center mb-2'>National Associations</h1>
                        <p className='text-sm text-gray-600 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='bg-[#f5f7fa] flex flex-col items-center justify-center p-7'>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/65788eb8a63b5d29320a15ff_Icon%202.png" loading="lazy" alt="" className='mb-3'/>
                        <h1 className='text-2xl font-semibold text-center mb-2'>Clubs And Groups</h1>
                        <p className='text-sm text-gray-600 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
            <div className='max-w-7xl w-full flex grid lg:grid-cols-2 items-center '>
                <img src={img2}/>
                <div>
                    <h1 className='text-3xl font-semibold mb-3 text-gray-700'>The unseen of spending three years at Pixelgrade</h1>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='bg-[#4CAF4F] px-5 py-2 rounded-md text-white mt-7 text-center text-lg'>Button Text</button>
                </div>
            </div>
        </div>
        <div className='w-full bg-[#f5f7fa] flex item-center justify-center'>
            <div className='max-w-7xl w-full flex items-center justify-between'>
                <div className='py-20'>
                    <h1 className='text-3xl text-gray-800 font-semibold'>Helping a local </h1>
                    <span className='text-3xl font-semibold text-[#4CAF4F]'>business reinvent itself</span> 
                    <p className='mt-5 text-gray-600'>We reached here with our hard work and dedication</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-14'>
                    <div className='flex items-center gap-3'>
                        <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/657898e52c92280ca8e1c333_Icon%20(1).png" loading="lazy" alt="" class="proof-icon" className='w-14'/>
                        <div >
                            <h1 className='text-xl font-semibold text-gray-800'>2,245,341</h1>
                            <p className='text-gray-600'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img  src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/657898e5f53227fe10620b94_Icon%20(2).png" loading="lazy" alt="" class="proof-icon" className='w-14'/>
                        <div >
                            <h1 className='text-xl font-semibold text-gray-800'>2,245,341</h1>
                            <p className='text-gray-600'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/657898e5c96bb107f5dd783e_Icon%20(3).png" loading="lazy" alt="" class="proof-icon" className='w-14'/>
                        <div >
                            <h1 className='text-xl font-semibold text-gray-800'>2,245,341</h1>
                            <p className='text-gray-600'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                    <img src="https://assets-global.website-files.com/657884226f6bf0f39862c9c2/657898e5caef77ac6dceaaed_Icon%20(4).png" loading="lazy" alt="" class="proof-icon" className='w-14'/>
                        <div >
                            <h1 className='text-xl font-semibold text-gray-800'>2,245,341</h1>
                            <p className='text-gray-600'>Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-20'>
            <div className='flex flex-col max-w-7xl w-full items-center justify-center'>
                <h1 className='text-3xl font-semibold text-gray-700'>Caring is the new marketing</h1>
                <p className='text-gray-600 w-[90%] text-center text-lg mt-3 mb-10'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
                <div className='grid xl:grid-cols-3 gap-6'>
                    <div className='relative flex flex-col items-center'>
                        <img src='https://assets-global.website-files.com/657884226f6bf0f39862c9c2/6579562dfa6877447935803b_blog%201.png' className='rounded-lg'/>
                        <div className='bg-[#f5f7fa] absolute top-[80%] py-6 px-10 flex flex-col justify-center items-center w-[90%] rounded-2xl'>
                            <h1 className='font-semibold text-gray-600 text-center text-lg'>Creating Streamlined Safeguarding Processes with OneRen</h1>
                            <button className='bg-[#4CAF4F] px-5 py-2 text-white rounded-md mt-5 text-center items-center'>Read More</button>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <img src='https://assets-global.website-files.com/657884226f6bf0f39862c9c2/6579562dfa6877447935803b_blog%201.png' className='rounded-lg'/>
                        <div className='bg-[#f5f7fa] absolute top-[80%] py-6 px-10 flex flex-col justify-center items-center w-[90%] rounded-2xl'>
                            <h1 className='font-semibold text-gray-600 text-center text-lg'>Creating Streamlined Safeguarding Processes with OneRen</h1>
                            <button className='bg-[#4CAF4F] px-5 py-2 text-white rounded-md mt-5 text-center items-center'>Read More</button>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <img src='https://assets-global.website-files.com/657884226f6bf0f39862c9c2/6579562dfa6877447935803b_blog%201.png' className='rounded-lg'/>
                        <div className='bg-[#f5f7fa] absolute top-[80%] py-6 px-10 flex flex-col justify-center items-center w-[90%] rounded-2xl'>
                            <h1 className='font-semibold text-gray-600 text-center text-lg'>Creating Streamlined Safeguarding Processes with OneRen</h1>
                            <button className='bg-[#4CAF4F] px-5 py-2 text-white rounded-md mt-5 text-center items-center'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home