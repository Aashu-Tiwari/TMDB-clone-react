"use client"

import React, { useState,useEffect } from 'react'
import MyAPI from "@/app/config/axios"
import { data } from 'autoprefixer';
import { Header } from '@/app/components/Header';
import '@/app/SearchDetails/[name]/Search.css'
import Image from 'next/image';
import Loading from '@/app/Loading/loading';
import Footer from '@/app/components/Footer';
import Link from 'next/link';


const page = (collectionname) => {
    const[mname,setmname]= useState("");
    const[moviedetails,setmoviedetails]= useState([]);

    useEffect(()=>{
        setmname(collectionname.params.name)
    });

    useEffect(() => {
         MyAPI.get(`https://api.themoviedb.org/3/search/movie?query=${mname}&include_adult=false&language=en-US&page=1`)
        .then((res) => {
          if (res.status == 200) {
            setmoviedetails(res.data.results);
          }
            // console.log(res.data);
          })
      },[mname]);
      console.log(moviedetails)
  return (
    <div>
      <Header />

      <div className='full'>
        <div className='leftport'>
          <div className='tpo'>
            <p>Search Results</p>
          </div>
          <div className='tpo1'>
            <p>Movies</p>
          </div>
          <div className='tpo1'>
            <p>TV Shows</p>
          </div>
          <div className='tpo1'>
            <p>People</p>
          </div>
          <div className='tpo1'>
            <p>Collections</p>
          </div>
          <div className='tpo1'>
            <p>Companies</p>
          </div>
          <div className='tpo1'>
            <p>Keywords</p>
          </div>
          <div className='tpo1'>
            <p>Networks</p>
          </div>  
        </div>
        <div className='rightport'>
          {moviedetails.length>0 ?
              moviedetails.map((item)=>{
                return(
                  <div className='mdata'>
                    <Link href={`/MovieDetails/${item.id}`}><img className='cursor-pointer' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" /></Link>
                    <div className='mdatatext'>
                    <h1>{item.title}</h1>
                    <h6>{item.release_date}</h6>
                    <p>{item.overview}</p>
                    </div>
                  </div>
                )
              }):<Loading/>}
          
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default page