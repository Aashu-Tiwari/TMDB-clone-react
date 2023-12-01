"use client"
import React, { useState } from 'react'
import Dropdownmenu from '@/Dropdown/Dropdownmenu';
// import Logoimg from '../images/tmdb.png';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/css/Header.css';
import { Dropdownmenu2 } from '@/Dropdown/Dropdownmenu';
import { Dropdownmenu3 } from '@/Dropdown/Dropdownmenu';
import { Dropdownmenu4 } from '@/Dropdown/Dropdownmenu';
import { Dropdownlogin } from '@/Dropdown/Dropdownmenu';


export const Header = () => {
  const[isDropdownVisible,setDropdownVisible] = useState(false);
  const[isDropdownVisible1,setDropdownVisible1] = useState(false);
  const[isDropdownVisible2,setDropdownVisible2] = useState(false);
  const[isDropdownVisible3,setDropdownVisible3] = useState(false);
  const[isDropdownVisiblelogin,setDropdownVisiblelogin] = useState(false);


  const handleMouseEnter = ()=>{
    setDropdownVisible(true);
  }
  const handleMouseEnter1 = ()=>{
    setDropdownVisible1(true);
  }
  const handleMouseLeave = ()=>{
    setDropdownVisible(false);
  }
  const handleMouseLeave1 = ()=>{
    setDropdownVisible1(false);
  }
  const handleMouseEnter2 = ()=>{
    setDropdownVisible2(true);
  }
  const handleMouseLeave2 = ()=>{
    setDropdownVisible2(false);
  }   
  const handleMouseEnter3 = ()=>{
    setDropdownVisible3(true);
  }
  const handleMouseLeave3 = ()=>{
    setDropdownVisible3(false);
  }
  const handleMouseEnterlogin = ()=>{
    setDropdownVisiblelogin(true);
  }
  const handleMouseLeavelogin = ()=>{
    setDropdownVisiblelogin(false);
  }

  return (
    <div>
      <div id='h_bg' className='h-20 d-flex justify-between' style={{backgroundColor:"#032541"}}>
        <div id='h_interior' className='container d-flex gap-4'>
          <Link href="/"><img className='w-40 h-20 cursor-pointer' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="My image"  /></Link>
          <h4 className='mt-2 cursor-pointer'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:"white",alignItems:"center",display:"flex"}}>Movies {isDropdownVisible && <Dropdownmenu />}</h4>
          <h4 className='mt-2 cursor-pointer'onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={{color:"white",alignItems:"center",display:"flex"}}>TV Shows {isDropdownVisible1 && <Dropdownmenu2 />}</h4>
          <h4 className='mt-2 cursor-pointer' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{color:"white",alignItems:"center",display:"flex"}}>People{isDropdownVisible2 && <Dropdownmenu3 />} </h4>
          <h4 className='mt-2 cursor-pointer' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{color:"white",alignItems:"center",display:"flex"}}>More {isDropdownVisible3 && <Dropdownmenu4 />}</h4>
        </div>
        <div className='nav2' style={{display:"flex", alignItems:"center",gap:"30px"}}>
                <i style={{color:"white",fontSize:"25px",hover:"cursor:pointer",textDecoration:'none'}} className="ri-add-line cursor-pointer"></i>
                <div className='box h-7 w-7 cursor-pointer border-2' style={{borderRadius:"5px"}}>
                  <h6 style={{color:"white",marginLeft:"2.5px"}}>EN</h6>
                </div>
                <i style={{color:"white",fontSize:"23px",hover:"cursor:pointer"}} className="ri-notification-line cursor-pointer"></i>
                <div className='circle w-8 h-8 cursor-pointer' onMouseEnter={handleMouseEnterlogin} onMouseLeave={handleMouseLeavelogin} style={{borderRadius:"50%",backgroundColor:"#01B4E4",display:"flex",alignItems:"center",justifyContent:"center"}}> {isDropdownVisiblelogin && <Dropdownlogin />}
                  <p className='mt-3 fs-6 text-light fw-600' style={{position:"absolute"}}>A</p> 
                </div>
                <i className="ri-search-line fs-4 mb-1 cursor-pointer" style={{color:'#01B4E4'}}></i>
          </div>
      </div>
    </div>
  )
}

