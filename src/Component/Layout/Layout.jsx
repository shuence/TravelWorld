import React from 'react'
import Header from '../Header/Header'
import Router from '../../Router/Routers'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Router/>
        <Footer/>
    </div>
  )
}

export default Layout