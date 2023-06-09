import { SingleNotificationIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import { NextPage } from 'next'
import React from 'react'

const NotificationsList = [
    {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum to make a type specimen book",
        datetime: 20,
        read: false
    },
    {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum to make a type specimen book",
        datetime: 20,
        read: true

    },
    {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum to make a type specimen book",
        datetime: 20,
        read: true
    }
]

interface NotificationProps {
    description: string
    datetime: number
    read: boolean
}

const Notification:React.FC<NotificationProps> = ({description, datetime, read}) => {
    return (
        <div  className={`w-full bg-${read ? "navbarbg" : "#fff"} rounded-lg px-5 py-4 flex items-start gap-6 text-lg md:text-xl font-medium`}>
            <div className='mt-2'><SingleNotificationIcon/></div>
            <div>
                <p className='mb-2'>Loreum ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s
                </p>
                <p className='text-gray_notif'>20min ago</p>
            </div>
        </div>
    )
}

const NotificationsPage: NextPage = () => {
    return (
        <Layout>
            <div className='mt-20 mb-28 md:mt-24 px-0 md:px-10'>
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6">            
              {NotificationsList.map((notification, index) => (
                <Notification key={index} {...notification}/>
              ))}
            </div>

            </div>
        </Layout>
  )
}

export default NotificationsPage
