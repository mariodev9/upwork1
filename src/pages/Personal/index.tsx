import Layout from '@/components/Layout'
import PrimaryButton from '@/components/common/Buttons/PrimaryButton'
import { NextPage } from 'next'
import React from 'react'

const Categories = [
  "GPA",
  "First Name",
  "Last Name ",
  "High School",
  "Home State",
  "City",
  "Height ",
  "Weight",
  "Grad Year",
]

const PersonalPage: NextPage = () => {
    return (
      <Layout>
          <div className='mt-20 mb-24 md:mt-24 px-10'>
            <h1 className='py-4 text-center md:text-start text-3xl font-semibold'>Personal</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {/* Item */}
              {Categories.map((category, index) => (
                <div key={index} className='w-full bg-navbarbg rounded-lg px-5 py-4'>
                  <div className='flex items-center gap-3 text-xl md:text-2xl font-medium'>
                    <div className='bg-white h-12 w-20 md:h-20 md:w-20 rounded-md'></div>
                    <h3>{category}</h3>
                  </div>
                </div>
              ))}
            </div>
              <button
                className="text-xl mt-10 bg-primary hover:bg-primaryhover text-white border py-2 px-12 font-semibold text-md rounded-xl"
              >
                Save
              </button>
          </div>
      </Layout>
  )
}

export default PersonalPage
