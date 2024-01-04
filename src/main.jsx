import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App,Learn,Blog,Reference,Community } from './sections'
import { MainLayout } from './layouts'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<App/>} />
        <Route path='/Learn' element={<Learn/>} />
        <Route path='/Reference' element={<Reference/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Community' element={<Community/>} />

      </Route>
    </Routes>
  </BrowserRouter>
)
