import React from 'react'
import { BaseballIcon, HomeIcon, MyTweetIcon, PerformanceIcon, PersonalIcon } from '../../Icons'
import { useRouter } from 'next/router'
import NavLink from './NavLink'

interface NavLinkProps {
    title: string;
    ShowIcon: (isHover: boolean) => JSX.Element;
    url: string
}

  const navList: NavLinkProps[] = [
    {
        title: "Home",
        ShowIcon: (isHover: boolean) => {
            return <HomeIcon isHover={isHover} />;
        },
        url: "/",
    },
    {
        title: "Personal",
        ShowIcon: (isHover: boolean) => {
            return <PersonalIcon isHover={isHover} />;
        },       
         url: "/Personal",
    },
    {
        title: "Performance",
        ShowIcon: (isHover: boolean) => {
            return <PerformanceIcon isHover={isHover} />;
        },  
        url: "/Performance",
    },
    {
        title: "Baseball",
        ShowIcon: (isHover: boolean) => {
            return <BaseballIcon isHover={isHover} />;
        }, 
        url: "/Baseball",
    },
    {
        title: "My Tweet",
        ShowIcon: (isHover: boolean) => {
            return <MyTweetIcon isHover={isHover} />;
        },
        url: "/MyTweet",
    },
]

const BottomNav = () => {
    const router = useRouter()

    return (
    <div className="fixed bottom-0 bg-navbar left-0 right-0">
        <div className='bg-navbarbg h-24 md:h-24 grid grid-cols-5'>
            {navList.map((navlink, index) => (
                <NavLink key={index} navlinkProps={navlink} />
            ))}
        </div>
    </div>
    )
}

export default BottomNav
