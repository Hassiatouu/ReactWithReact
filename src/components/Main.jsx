import React from 'react'

const Main = ({ text1,text2,text3 ,bg,img}) => {
  return (
    <div className={`w-full border-b border-search py-20 flex flex-col items-center justify-center  text-white space-y-8 ${bg}`}> 
        <div className='text-4xl font-semibold'>
        {text1}
        </div>
        <div className='text-xl w-1/2 text-center'>
        {text2}
        </div>
        <img src={img} alt={text1} />
        <div className='text-xl  w-1/2 text-center'>
        {text3}
        </div>  
    </div>
    
  )
}

export default Main