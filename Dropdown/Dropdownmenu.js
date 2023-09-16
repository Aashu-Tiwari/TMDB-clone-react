"use client"

import React from 'react'
import Link from 'next/link'
import '@/app/css/Dropdown.css'

const Dropdownmenu = () => {
  return (
    <div>
        <ul className='mt-4' style={{zIndex:"1",position:"absolute",marginLeft:"-70px",position:"absolute",height:"100px", width:"200px", borderRadius:"10px" , whiteSpace:"nowrap" ,backgroundColor:'white' , fontWeight:"400"}}>
            <Link href={"/PopularMovies"}><li className='popul cursor-pointer' style={{color:"black",fontSize:"15px",marginTop:"10px",textDecoration:"none"}}>Popular</li></Link>
            <Link href={"/Nowplaying"} ><li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Now Playing</li></Link>
            <Link href={"/Toprated"}><li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Top Rated</li></Link>
        </ul>
    </div>
  )
}
export default Dropdownmenu;


export const Dropdownmenu2 = () => {
  return (
    <div>
        <ul className='mt-4' style={{zIndex:"1",position:"absolute",marginLeft:"-70px",position:"absolute",height:"100px", width:"200px", borderRadius:"10px" , whiteSpace:"nowrap" ,backgroundColor:'white' , fontWeight:"400"}}>
            <Link href={"/Populartv"}><li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Popular</li></Link>
            <Link href={"/Airingtoday"}><li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Airing Today</li></Link>
            <Link href={"/Topratedtv"}><li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Top Rated</li></Link>
        </ul>
    </div>
  )
}

export const Dropdownmenu3 = () => {
    return (
      <div>
          <ul className='mt-4' style={{zIndex:"1",position:"absolute",marginLeft:"-70px",position:"absolute",height:"50px", width:"250px", borderRadius:"10px" , whiteSpace:"nowrap" ,backgroundColor:'white' , fontWeight:"400"}}>
              <li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Popular People</li>
          </ul>
      </div>
    )
  }

  export const Dropdownmenu4 = () => {
    return (
      <div>
          <ul className='mt-4' style={{zIndex:"1",position:"absolute",marginLeft:"-70px",position:"absolute",height:"120px", width:"200px", borderRadius:"10px" , whiteSpace:"nowrap" ,backgroundColor:'white' , fontWeight:"400"}}>
              <li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Discussion</li>
              <li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Leaderboard</li>
              <li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Support</li>
              <li style={{color:"black",fontSize:"15px",marginTop:"10px"}}>Api</li>
          </ul>
      </div>
    )
  }

  export const Dropdownlogin = ()=>{
    return(
      <ul className='' style={{zIndex:"1",position:"absolute",marginTop:"95px",backgroundColor:"white",whiteSpace:"nowrap",height:"40px",width:"230px",borderRadius:"5px"}}>
        <li style={{color:"black",marginRight:"20px",marginTop:"7px"}}>Profile and settings </li>
      </ul>
    )
  }

  export const Dropdownicon = ()=>{
    return(
      <ul className=' mt-2' style={{position:"absolute",height:"30px",width:"100px",whiteSpace:"nowrap",backgroundColor:"#032541", marginLeft:"-20px",borderRadius:"5px"}}>
        <li style={{marginLeft:"-20px",color:"white"}} >Add to list</li>
      </ul>
    )
  }

  export const Dropdownicon1 = ()=>{
    return(
      <ul className=' mt-2' style={{ position:"absolute",width:"150px",height:"30px",whiteSpace:"nowrap",backgroundColor:"#032541", marginLeft:"20px",borderRadius:"5px"}}>
        <li className='mt-1' style={{marginLeft:"-10px",color:"white"}} >Mark as favorite</li>
      </ul>
    )
  }

  export const Dropdownicon2 = ()=>{
    return(
      <ul className=' mt-2' style={{position:"absolute",width:"200px",height:"30px",whiteSpace:"nowrap",backgroundColor:"#032541", marginLeft:"70px",borderRadius:"5px"}}>
        <li className='mt-1' style={{marginLeft:"-10px",color:"white"}} >Add to your watchlist</li>
      </ul>
    )
  }

  export const Dropdownicon3 = ()=>{
    return(
      <ul className=' mt-2' style={{position:"absolute",width:"100px",height:"30px",whiteSpace:"nowrap",backgroundColor:"#032541", marginLeft:"190px",borderRadius:"5px"}}>
        <li className='mt-1' style={{marginLeft:"-10px",color:"white"}} >Rate it</li>
      </ul>
    )
  }
  export const Dropdownover0 = ()=>{
    return(
      <ul  style={{height:"290px", zIndex:"2",position:"absolute",width:"150px",whiteSpace:"nowrap",backgroundColor:"white", marginTop:"-10px",borderRadius:"5px",top:"20%",left:"33%"}}>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Main</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Alternative titles</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Cast & Crew</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Release Dates</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Translations</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Watch Now</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Changes</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Report </li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Edit </li>
      </ul>
    )
  }
  export const Dropdownover1 = ()=>{
    return(
      <ul  style={{height:"140px", zIndex:"2",position:"absolute",width:"150px",whiteSpace:"nowrap",backgroundColor:"white", marginTop:"-10px",borderRadius:"5px",top:"20%",left:"42%"}}>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Backdrops</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Logos</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Posters</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Videos</li>
        
      </ul>
    )
  }

  export const Dropdownover2 = ()=>{
    return(
      <ul  style={{height:"80px", zIndex:"2",position:"absolute",width:"150px",whiteSpace:"nowrap",backgroundColor:"white", marginTop:"-10px",borderRadius:"5px",top:"20%",left:"51%"}}>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Discussions</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Reviews</li>
       
        
      </ul>
    )
  }

  export const Dropdownover3 = ()=>{
    return(
      <ul  style={{height:"100px", zIndex:"2",position:"absolute",width:"150px",whiteSpace:"nowrap",backgroundColor:"white", marginTop:"-10px",borderRadius:"5px",top:"20%",left:"60%"}}>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Share Link</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >facebook</li>
        <li className='mt-1' style={{marginLeft:"-10px",marginTop:"20px",color:"black"}} >Tweet</li>
      </ul>
    )
  }