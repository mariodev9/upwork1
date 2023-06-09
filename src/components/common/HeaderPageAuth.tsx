import React from 'react'

interface Props {
    title: string
    subtitle: string
}

export const HeaderPageAuth:React.FC<Props> = ({title, subtitle}) => {
  return (
    <div className='flex flex-col items-center mt-10 md:mt-0'>
        <div className='hidden md:flex justify-center items-center rounded-full bg-bginput h-32 w-32'>
            <h1 className='font-medium'>Logo</h1>    
        </div>
        <h1 className='font-semibold text-3xl text-center'>Login To Your Account</h1>
        <h2 className='font-semibold text-xl text-graysubtitle'>Explore the best experience now</h2>
    </div>
  )
}
