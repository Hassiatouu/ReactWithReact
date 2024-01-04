import React from 'react'
import { btn } from '../constants'
import { ButtonApp } from '../components'
import { NavLink } from 'react-router-dom'
import { Main } from '../components'
import { divv } from '../constants'
import { Footer } from "../components";
const App = () => {
  return (
  <div className=' grow'>   
    <main >
     <div className='h-[65vh] bg-head flex flex-col text-xl items-center justify-center text-white space-y-4'>
      <img></img>
      <h1 className='text-4xl font-bold'>React</h1>
      <h2 className='text-3xl'>The library for web and native user interfaces</h2>

      <div className='flex space-x-2'>
          {
              btn.map((item) => (
                <ButtonApp key={item.text}  text={item.text} bg={item.bg} />
              ))
          }
        </div>
     </div>

     <div className='flex flex-col'>
      {divv.map((item, index) => (
        <Main key={index} text1={item.text1} text2={item.text2} text3={item.text3} bg={item.bg} img={item.img}/>
      ))}
    </div>
    

    </main>
  </div>
  ) 
  
}


export default App