import React from 'react'

interface Props {
    text: string
}

const PrimaryButton: React.FC<Props> = ({text}) => {
  return (
    <button
        className="text-2xl mt-10 w-full bg-primary hover:bg-primaryhover text-white border py-2 px-6 font-semibold text-md rounded-xl"
    >
        {text}
    </button>
  )
}

export default PrimaryButton
