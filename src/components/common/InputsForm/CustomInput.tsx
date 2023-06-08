import React, { useState } from 'react'

interface Props {
  name: string
  label:string
  register: any
  required: boolean
  type: string
  placeholder: string

}

export const CustomInput:React.FC<Props> = ({ name, label, register, required, type, placeholder}) => {

  return (
    <div className='bg-bginput px-4 py-3 rounded-xl '>
    <label htmlFor={name} className="text-label font-semibold">{label}</label>
    <input 
        className="bg-bginput font-semibold w-full rounded text-black focus:outline-none" 
        placeholder={placeholder}
        id={name}
        type={type}
        {...register(name)}
        autoComplete=''
    />               
</div>
  )
}
