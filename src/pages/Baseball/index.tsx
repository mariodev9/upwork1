import Layout from "@/components/Layout"
import { NextPage } from "next"

const BaseballPage: NextPage = () => {
    return (
      <Layout>
          <div className='mt-20 mb-28 md:mt-24 px-10'>
            <h1 className='py-4 text-center md:text-start text-3xl font-semibold'>Baseball</h1>

          </div>
      </Layout>
  )
}

export default BaseballPage