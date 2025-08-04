import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import HeaderSec from '../components/HeaderSec'
import CardModule from '../components/CardModule'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeaderSec/>
      <HomeContent/>
      <CardModule />
      <Footer
      item1="About us"
      item2="Conatct"
      item3="Products"
      item4="Services"/>
    </div>
  )
}

export default HomePage
