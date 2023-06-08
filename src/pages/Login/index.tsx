import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { CustomInput } from '@/components/common/InputsForm/CustomInput'
import { PasswordCustomInput } from '@/components/common/InputsForm/PasswordCustomInput'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { HeaderPageAuth } from '@/components/common/HeaderPageAuth'

const LoginPage: NextPage = () => {

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors }
      } = useForm();

    const onSubmit = async (data:any) => {
        console.log(data, "Information Data");
      };

    return (
        <>        
        <Head>
            <title>AppName</title>
            <meta name="description" content="Flashcards study app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex justify-center'>
        <div className='container py-10 flex justify-center'>
            <div className='flex flex-col items-center'>
            {/* header auth Pages */}

                <HeaderPageAuth title='Login To Your Account' subtitle='Explore the best experience now'/>
            {/* header auth Pages */}
            <form 
                className='mt-10 flex flex-col gap-5 px-5'         
                onSubmit={handleSubmit(onSubmit)}
            >


                {/* Email */}
                <CustomInput     
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Examplehere@outlook.com"
                    register={register} 
                    required={true} 
                />

                {/* Password */}
                <PasswordCustomInput
                    name="newpassword"
                    label="Password"
                    register={register} 
                    required={true} 
                />



                <button
                    className="text-2xl mt-10 w-full bg-primary hover:bg-primaryhover text-white border py-2 px-6 font-semibold text-md rounded-xl"
                    type="submit"
                >
                Login
                </button>
            </form>
            <div className='flex items-center gap-2'>
                <p className='mt-2 text-xl text-graysubtitle font-semibold'>Don’t have an account ?</p> 
                <Link legacyBehavior href={"/Signup"} passHref>                
                    <a className='mt-2 text-primary font-bold'>Register</a>
                </Link>
            </div>
            </div>
        </div>
      </div>
        </>
    )
  }
  
  export default LoginPage