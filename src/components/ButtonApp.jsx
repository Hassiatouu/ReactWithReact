import React from 'react'

const ButtonApp = ({ text ,bg }) => {
  return (
    <button
        type="button"
        className={`rounded-3xl px-3.5 py-2.5 text-lg font-semibold ${bg} text-white shadow-sm hover:bg-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-btn flex flex-col space-y-4 items-center justify-center w-36  border border-gray-500`} >
            {text}
        
    </button>
      
  )
}

export default ButtonApp