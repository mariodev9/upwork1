import React from 'react'

interface Props {
    children: JSX.Element
}

 const CenterWraper:React.FC<Props> = ({children}) => {
  return (
    <div className='flex justify-center'>
        <div className='container py-10 flex justify-center'>
            <div className='flex flex-col items-center px-5 w-[700px]'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default CenterWraper
