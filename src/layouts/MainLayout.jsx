import React from 'react'
import { Header , Footer , Banner} from "../components";
import { Outlet } from 'react-router-dom';



const MainLayout = () => {
  return (
    <div className=''>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout