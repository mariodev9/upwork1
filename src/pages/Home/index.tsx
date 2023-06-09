import Layout from '@/components/Layout'
import PrimaryButton from '@/components/common/Buttons/PrimaryButton'
import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {

    let twitter_connected = false

    return (
        <Layout>
            <div className='h-96 flex items-center justify-center mt-20 mb-28 md:mt-24 px-10'>
                {twitter_connected ? 
                    <div className='max-w-lg text-center mt-24'>
                        <h1 className='text-[30px] md:text-[58px] font-medium'>Let’s Get You Found</h1>
                    </div>  
                :
                <div className='max-w-lg text-center mt-24'> 
                    <h1 className='text-[30px] md:text-[58px] font-medium'>First Let’s Connect To Twitter</h1>
                    <PrimaryButton text='Connect To Twitter' />
                </div> 
 }
            </div>
        </Layout>
  )
}

export default HomePage
