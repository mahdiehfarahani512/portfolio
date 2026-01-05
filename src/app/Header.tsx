import React from 'react'

const Header = () => {
  return (
<div className='h-full bg-black'>
<div className='flex justify-between items-center pt-4 '>
<div className='pl-4'>
    <p className=' text-[26px] text-[#8f9094] font-semibold'>
        {'{'}
        <span className='text-white'>M</span>
        {'}'}
    </p>
</div>
<div className='mr-22 '>
    <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"/></svg>
</div>
</div>
<div className='mt-[100px]'>
    <p className=' text-[18px] text-[#3ccf91] font-semibold'>Hey there!,I'm-</p>
    <div className='flex flex-col '>
    <p className='text-white text-[49px] font-bold'>Mahdie  </p>
        <p className='text-white text-[49px] font-bold'>Farahani.</p>
   
    </div>
    <p className='  text-[20px] text-[#8f9094]'><span className='text-white'>Software Engineer.</span> A self-taught developer with an interest in Computer Science.
</p>
<p>🚀 Currently specializing in Frontend (React / Next.js)</p>
<p></p>
</div>
</div>
  )
}

export default Header