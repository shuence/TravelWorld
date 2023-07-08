import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Tours from '../Pages/Tours'
import TourDetails from '../Pages/TourDetails'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SearchResultList from '../Pages/SearchResultList'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tour' element={<Tours/>}/>
      <Route path='/tour/:id' element={<TourDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/tour/search' element={<SearchResultList/>}/>

    </Routes>
  )
}

export default Router