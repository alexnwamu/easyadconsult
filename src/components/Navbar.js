import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
const CustomLink = ({href,title, className =""}) =>{
    const rounter = useRouter()
    return(
        <Link href={href} className={`${className } relative group`}>{title} 
        <span className={`h-[2px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full  transition-[width] ease  duration-300  ${rounter.asPath === href ? 'w-full' : 'w-0' }`} >
&nbsp;
        </span>
        </Link>
    ) }
const Navbar = () => {
    
  return (
    <nav className='fixed px-4 lg:px-16 py-4 w-full bg-[#E6F4F1]'>
        <div className='flex justify-between items-center'>
         <Link href={'/'}><Image src={`/easyadlogo.png`} height={100} width={150}  alt='logo' className='logo '/></Link>    <div className='flex items-center gap-6'><div className="links flex space-x-5">
         <CustomLink href = '/contact' title='About' />
            <CustomLink href='#about' title='Programs'  />
            <CustomLink href='#projects' title='Services' />
            <CustomLink href='#testimonials' title='Testimonials' />
            
            </div>
              <button className='py-2 px-4 font-semibold rounded-md bg-secondary'>Apply Now</button></div>
            
</div>
        
    </nav>
  )
}

export default Navbar