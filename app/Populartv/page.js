"use client"
import React,{useEffect,useState} from 'react'
import { Header } from '../components/Header'
import '@/app/css/PopularMovies.css'
import MyAPI from '../config/axios'
import Footer from '../components/Footer'
import Link from 'next/link'

const popularTV = () => {
    const [popularTV, setpopularTV] = useState([]);
    const [page,setpage] = useState(1)
    const [showButton, setShowButton] = useState(true);


    useEffect(() => {
        MyAPI.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`)
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res.data.results)
                    setpopularTV(res.data.results);
                }
            })
    },[page]);
  return (
    <div className='main'>
      <Header/>
      <div className='main2'>
        <div className='leftPop'>
          <h1>Popular TV Shows</h1>
          <div className='l1'>
            <h6 className='cursor-pointer'>Sort</h6>
            <i className="ri-arrow-right-s-line cursor-pointer"></i>
          </div>
          <div className='l1'>
          <h6 className='cursor-pointer'>Where To Watch</h6>
            <i className="ri-arrow-right-s-line cursor-pointer"></i>
          </div>
          <div className='l1'>
          <h6 className='cursor-pointer'>Filters</h6>
            <i className="ri-arrow-right-s-line cursor-pointer"></i>
          </div>
          <button>Search</button>
        </div>
        <div className='RightPop'>
            <div className='right container'>
          {popularTV.map((item)=>{
            return(
              <div className=" card">
                        <Link href={`/TV/${item.id}`}><img className='cursor-pointer' src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} alt="" /></Link>
                        <span className='name' >{item.name}</span> <br />
                        <span className='date' >{item.first_air_date}</span> <br />
                </div>
                )
                })}
            </div>
            <button className=' w-100 btn btn-info fs-5 mt-5 mb-5'style={{color:"white"}} onClick={()=>{
                setpage(page+1)
            }
                }>Update page to get new results</button>
                
        </div>
      
      </div>
      
      <Footer/>
    </div>
    
  )
}



export default popularTV