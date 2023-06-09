import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

interface MyObject {
    title: string;
    ShowIcon: (isHover: boolean) => JSX.Element;
    url: string
}

interface NavLinkComponentProps  {
    navlinkProps: MyObject;
  }

  const NavLink: React.FC<NavLinkComponentProps> = ({ navlinkProps }) => {
    const router = useRouter()
    const [isHover, setIsHover] = useState(false)

    return (
    <motion.div
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className='cursor-pointer border-t-4 hover:border-primary flex flex-col items-center justify-center text-gray_navbar hover:text-black'
        onClick={()=> router.push(navlinkProps.url)}
    >
        {navlinkProps.ShowIcon(isHover)}
        <h2 className='text-[10px] md:text-navItem font-medium'>{navlinkProps.title}</h2>
    </motion.div >
  )
}

export default NavLink