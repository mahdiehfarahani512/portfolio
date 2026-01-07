import React from 'react'

const Creativeworks = () => {
  return (
    <div className='bg-black h-full p-[120px] flex '>
        <div className='flex flex-col '>
            <span className='font-bold text-white text-[24px]'>All Creative Works.</span>
            <p className='text-[21px] text-[#8f9094]'>Here's some of my projects that I have worked on.</p>
            <span className='cursor-pointer text-[#3ccf91] text-[22px]'>Explore more →</span>
            

            <div className=' p-3 bg-gray-950 rounded-b-[10px] mt-25'>
                <div className='flex items-center justify-between'>
                    <span className='text-white font-bold text-[26px]'>Catch The Insect</span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H9" stroke="#222222" stroke-linecap="round"/>
<path d="M15 15V15.5H15.5V15H15ZM7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L7.35355 6.64645ZM14.5 8V15H15.5V8H14.5ZM15 14.5H8V15.5H15V14.5ZM15.3536 14.6464L7.35355 6.64645L6.64645 7.35355L14.6464 15.3536L15.3536 14.6464Z" fill="#222222"/>
</svg>
                </div>
                <div className='flex gap-2 items-center '>
                    <svg width="15px" height="15px" viewBox="0 0 15 15" fill="#faf089" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H0V15H15V0ZM8 8C8 6.89543 8.89543 6 10 6H11.1667C12.1792 6 13 6.82081 13 7.83333V8H12V7.83333C12 7.3731 11.6269 7 11.1667 7H10C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9H11C12.1046 9 13 9.89543 13 11C13 12.1046 12.1046 13 11 13H10C8.89543 13 8 12.1046 8 11H9C9 11.5523 9.44772 12 10 12H11C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10H10C8.89543 10 8 9.10457 8 8ZM6 6V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11H3C3 12.1046 3.89543 13 5 13C6.10457 13 7 12.1046 7 11V6H6Z" fill="##faf089"/>
</svg>
                    <span className='tetx-[14px] text-[#faf089] font-bold'>Javascript</span></div>

            </div>



        </div>
    </div>
  )
}

export default Creativeworks