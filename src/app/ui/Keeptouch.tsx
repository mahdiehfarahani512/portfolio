import React from 'react'

const Keeptouch = () => {
  return (
    <div className=' bg-black flex flex-col justify-center items-center  h-full gap-10'>
        <p className=' text-[50px] text-white font-bold text-center'>Keep In Touch.</p>
        <p className='text-[17px] text-[#8f9094] text-center'>I'm currently specializing in <span className='text-[#3ccf91]'>Front-end Development.</span><br></br>
Feel free to get in touch and talk more about your projects.</p>
<div className=" flex gap-5 hover:cursor-pointer ">
    <div className="flex gap-2 bg-[#ffffff14] px-4 py-2 rounded-[7px]">
    <svg fill="#3ccf91" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
       <span className=" text-white font-bold  ">Linkedin</span>
  </div>
 <div className="flex gap-2 bg-[#ffffff14] px-4 py-2 rounded-[7px] hover">
    
<svg width="20px" height="20px" viewBox="0 0 15 15" fill="#3ccf91" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 0C0.671165 0 0 0.670259 0 1.49935V10.4935C0 11.3226 0.671165 11.9928 1.5 11.9928H5.2325L7.08406 14.7683C7.1768 14.9074 7.33288 14.9909 7.5 14.9909C7.66712 14.9909 7.8232 14.9074 7.91594 14.7683L9.7675 11.9928H13.5C14.3288 11.9928 15 11.3226 15 10.4935V1.49935C15 0.670259 14.3288 0 13.5 0H1.5Z" fill="#3ccf91"/>
</svg>
           <span className=" text-white font-bold  ">Email</span>
  </div>
  <div className="flex gap-2 bg-[#ffffff14] px-4 py-2 rounded-[7px] hover">
    <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path stroke="#3ccf91" stroke-linejoin="round" stroke-width="2" d="M6 5a2 2 0 012-2h16a2 2 0 012 2v22a2 2 0 01-2 2H8a2 2 0 01-2-2V5z"/>
  <path stroke="#3ccf91" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9h4M10 16h12M10 20h12M10 24h4"/>
  <circle cx="22" cy="9" r="1" fill="#3ccf91"/>
</svg>
       
          <span className=" text-white font-bold  ">Resume</span>
  </div>
 
 
</div>
    </div>
  )
}

export default Keeptouch