import React, { useState } from 'react'

interface Props {
    name: string
    label:string
    register: any
    required: boolean
  }

export const PasswordCustomInput:React.FC<Props> = ({ name, label, register, required}) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='flex items-center justify-between bg-bginput px-4 py-3 rounded-xl w-full'>
    <div className='flex-1'>
        <label htmlFor={name} className="text-label font-semibold">{label}</label>
        <input 
            className="bg-bginput font-semibold w-full rounded text-black focus:outline-none" 
            type={showPassword ? "text" : 'password'}
            id={name}
            autoComplete='new-password'
            {...register(name)}
        />
    </div>
    <button 
        className='font-medium border border-primary rounded-xl py-2 px-6 bg-outlinebutton'
        onClick={()=> setShowPassword(!showPassword)}
    >
        {showPassword ? "Hide" : "View"}
    </button>
</div>
  )
}
