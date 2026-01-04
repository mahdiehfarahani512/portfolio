import React from 'react'

const Header = () => {
  return (
<>
<div className='flex justify-between items-center'>
<div className='mt-4 ml-5'>
    <p className=' text-[32px] text-[#8f9094]'>
        {'{'}
        <span className='text-white'>M</span>
        {'}'}
    </p>
</div>
<div className=''>
    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"/></svg>
</div>
</div>
<div className='mt-[100px]'>
    <p className=' text-[22px] text-[#3ccf91] font-semibold'>Hey there!,I'm-</p>
    <p className='text-black text-[62px] font-bold'>Mahdie 
        <p>Farahani</p>
    </p>
    <p className='  text-[20px] text-[#8f9094]'><span className='text-white'>Software Engineer.</span> A self-taught developer with an interest in Computer Science.
</p>
<p>🚀 Currently specializing in Frontend (React / Next.js)</p>
<p></p>
</div>
</>
  )
}

export default Header