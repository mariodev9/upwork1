import React from 'react'
import BottomNav from './Navbars/BottomNav'
import TopNav from './Navbars/TopNav'

interface Props {
    children: JSX.Element
}

const Layout:React.FC<Props> = ({children}) => {
    return (
    <div className='relative'>
        <TopNav/>
            {children}
        <BottomNav/>
    </div>
  )
}

export default  Layout
