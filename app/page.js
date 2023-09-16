"use client"
import React from 'react'
import {Header} from './components/Header'
import TopBanner from './components/TopBanner'
import Trending from './components/Trending'
import Trailer from './components/Trailer'
import Popular from './components/Popular'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <TopBanner/>
      <Trending/>
      <Trailer/>
      <Popular/>
      <Footer/>

    </div>
  )
}

export default page