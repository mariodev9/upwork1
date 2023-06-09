import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import WelcomeIllustration from '@/components/Illustrations'
import BottomNav from '@/components/Layout/Navbars/BottomNav'
import CenterWraper from '@/components/Layout/CenterWraper'

const WelcomePage: NextPage = () => {
    return (
        <CenterWraper>
            <>
           <div className="relative">
                <div className='mt-10 flex flex-col items-center justify-center'>
                    <WelcomeIllustration/>
                    <h1 className='font-semibold text-3xl text-center'>Welcome To Showcase Ballers</h1>
                    <h2 className='font-semibold text-xl text-graysubtitle text-center'>We are focused on helping you get found</h2>

                    <button
                        className="text-xl md:text-2xl mt-16 w-full bg-primary hover:bg-primaryhover text-white border py-3 px-6 font-medium  rounded-xl"
                    >
                        Connect Your Twitter Account
                    </button>
                </div>

                <BottomNav/>
            </div>

            </>
        </CenterWraper>
  )
}
export default WelcomePage
