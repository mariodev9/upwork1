import {useEffect, useState} from 'react'
import { CustomInput } from '@/components/common/InputsForm/CustomInput'
import { NextPage } from 'next'
import Head from 'next/head'
import { useForm} from "react-hook-form";
import Link from 'next/link';
import { PasswordCustomInput } from '@/components/common/InputsForm/PasswordCustomInput';
import { HeaderPageAuth } from '@/components/common/HeaderPageAuth';
import CenterWraper from '@/components/Layout/CenterWraper';
import axios from 'axios';

 const SignupPage: NextPage = () => {

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors }
      } = useForm();

      const onSubmit = async (data:any) => {
        // SignUp Api
      };

  return (
    <>
        <Head>
            <title>AppName</title>
            <meta name="description" content="App name" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenterWraper>
            <>
                <HeaderPageAuth title='Sign up Account' subtitle='Discover your social & Try to sign up'/>
                {/* Form */}
                <form 
                    className='mt-10 flex flex-col gap-5 w-full'         
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Grid 2 - First Name & Last Name */}
                    <div className="grid grid-cols-2 gap-5">
                        {/* First Name */}
                        <CustomInput         
                            type="text"
                            name="firstName"
                            label="First Name"
                            placeholder="Here"
                            register={register} 
                            required={true} 
                        />
                        {/* LastName */}
                        <CustomInput         
                            type="text"
                            name="lastName"
                            label="Last Name"
                            placeholder="Example"
                            register={register} 
                            required={true}
                        />
                    </div>

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
                    
                    <PasswordCustomInput 
                        name="retypepassword"
                        label="Password"
                        register={register} 
                        required={true} 
                    />


                    <button
                        className="text-2xl mt-4 w-full bg-primary hover:bg-primaryhover text-white border py-2 px-6 font-semibold text-md rounded-xl"
                        type="submit"
                    >
                    Create Account
                    </button>
                </form>

                {/* Footer */}
                <div className='flex items-center gap-2'>
                    <p className='mt-2 text-xl text-graysubtitle font-semibold'>Already have an account ?</p> 
                    <Link legacyBehavior href={"/Login"} passHref>                
                        <a className='mt-2 text-primary font-bold'>Login</a>
                    </Link>
                </div>
            </>
        </CenterWraper>

    </>
  )
}

export default SignupPage


