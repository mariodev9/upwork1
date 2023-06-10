import Layout from "@/components/Layout"
import { NextPage } from "next"

const BaseballPage: NextPage = () => {
    return (
      <Layout>
          <div className='mt-20 mb-28 md:mt-24 px-10'>
            <h1 className='py-4 text-center md:text-start text-3xl font-semibold'>Baseball info</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {/* Item */}
              {[1,2,3,4,5,6].map((category, index) => (
                <div key={index} className='w-full bg-navbarbg rounded-lg px-5 py-4'>
                  <div className='flex items-center gap-3 text-xl md:text-2xl font-medium'>
                    <div className='bg-white h-12 w-20 md:h-20 md:w-20 rounded-md'></div>
                    <h3>Title Info</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex sm:w-full gap-3">
            <button
                className="w-1/2 md:w-auto text-xl mt-10 hover:bg-primaryhover text-primary hover:text-white border-2 border-primary py-3 px-12 font-semibold text-md rounded-xl"
              >
                Back
              </button>
              <button
                className="w-1/2 md:w-auto text-xl mt-10 bg-primary hover:bg-primaryhover text-white border py-2 px-12 font-semibold text-md rounded-xl"
              >
                Save
              </button>
            </div>
          </div>
      </Layout>
  )
}

export default BaseballPage