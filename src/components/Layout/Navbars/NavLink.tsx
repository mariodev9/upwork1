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

    const handleClick = () => {
      router.push(navlinkProps.url)
    }

    const isActive = navlinkProps.url === router.asPath 

    return (
    <motion.div
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        style={{borderTop: navlinkProps.url === router.asPath ? "3px solid" : "none", borderColor: "#1D90F4", color: isActive ? "#000" : "gray_navbar" }}
        className='cursor-pointer flex flex-col items-center justify-center text-gray_navbar hover:text-black'
        onClick={()=> handleClick() }
    >
       {navlinkProps.ShowIcon(isActive ? isActive : isHover)}
        <h2 className='text-[10px] md:text-navItem font-medium'>{navlinkProps.title}</h2>
    </motion.div >
  )
}

export default NavLink