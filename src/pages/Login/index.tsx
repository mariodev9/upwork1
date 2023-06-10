import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { CustomInput } from '@/components/common/InputsForm/CustomInput'
import { PasswordCustomInput } from '@/components/common/InputsForm/PasswordCustomInput'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { HeaderPageAuth } from '@/components/common/HeaderPageAuth'
import CenterWraper from '@/components/Layout/CenterWraper'
import axios from "axios"

const LoginPage: NextPage = () => {

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors }
      } = useForm();

    const onSubmit = async (data:any) => {
    axios.post('https://showcase-api-8j7x.onrender.com/login', {
    email: data.email,
    pwd: data.password,
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
      };

    return (
        <>        
            <Head>
                <title>AppName</title>
                <meta name="description" content="App..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CenterWraper>
                <>
                    <HeaderPageAuth title='Login To Your Account' subtitle='Explore the best experience now'/>
                    <form
                        className='mt-10 flex flex-col gap-5 w-full '         
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
                            name="password"
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
                </>
            </CenterWraper>
        </>
    )
  }
  
  export default LoginPage