import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full pt-4'>
        <div className='flex justify-between w-full'>
    <div>
      <h2 className='mb-4 text-[#9FAFA1] text-[14px] ml-1 '>Achieve your dream career</h2>
    <h1 className='text-[42px] text-primary font-serif mb-2'>Study Abroad in Georgia</h1>
    <p className='text-[14px] '>Embark on an unforgettable study abroad journey with our programs <br /> in Georgia Explore rich culture, diverse landscape, and affordable <br /> tuition fees. Apply now and expand your horizons!</p>
    <div className='flex gap-4 mt-16  items-center'>
        <button className='bg-secondary p-4 font-semibold rounded-md '>Free Consultation</button>
        <p>Join the 50 Students who trust us</p>
    </div>
    </div>
    <div>
         <Image src={'/hero.jpg'} className='rounded' width={550} height={550} alt='hero'  /></div>
  </div>
  
  </div>
  )
}

export default Hero