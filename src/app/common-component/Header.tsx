

const Header = () => {
  return (
    <div className='bg-black  p-6 sticky top-0 left-0 h-[80px] '>
        <div className='flex justify-between lg:border-b border-b-[1px] border-b-[#1e2029] lg:w-4/4 '>
 <div className=' flex gap-1 items-center hover:cursor-pointer lg:pl-[70px] lg:pt-1 lg:items-center '>
                <p className='text-[#8f9094] text-[32px] font-bold'>{'{'}</p>
<span  className='text-white text-[32px] font-bold'>M</span>
<p className='text-[#8f9094] text-[32px] font-bold'>{'}'}</p>
            </div>
       {/* موبایل */}
      <div className="block md:hidden">
      <svg width="25px" height="25px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <g fill="#ffffff">
        <rect x="6" y="22" width="36" height="4"/>
        <rect x="6" y="10" width="36" height="4"/>
        <rect x="6" y="34" width="36" height="4"/>
    </g>
</svg>
      </div>

      {/* لپ‌تاپ و بالاتر */}
      <div className="hidden md:block  ">
        <div className='flex gap-[30px] text-[#ffffffeb] font-bold text-[17px] pr-[130px] hover:cursor-pointer'>
       <span>Home</span>
       <span>Projects</span>
       <span>Blog</span>
       </div>
      </div>
 </div>

    </div>
  )
}

export default Header