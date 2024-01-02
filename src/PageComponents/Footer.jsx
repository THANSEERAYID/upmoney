import React from 'react'
import avatar from '../Images/Avatars/Avatar group.png'

function Footer() {
  return (
    <>
    <div className='mx-4 md:mx-16 xl:mx-20 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] my-12  flex justify-center items-center '>
    <div className='flex justify-center items-center py-8 px-1'>
    <div>

    
<div className='flex justify-center '>
<img src={avatar} alt="avatar group"/>
</div>
    
<p className='mt-8 text-center text-[20px] text-gray-900 font-[600]'>Still have questions?</p>
<p className='mt-2 text-center text-gray-500 text-[18px] font-[500]'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
<div className='w-full flex justify-center items-center'>
<button className='bg-black p-4 text-white rounded-xl mt-6'>Get in touch</button>
</div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Footer
