"use client"
import React,{useEffect,useState} from 'react'
import '@/app/css/Popular.css'
import MyAPI from '../config/axios'
import Loading from '../Loading/loading';
import Link from 'next/link';


const Popular = () => {
    const [popular, setpopular] = useState([]);

    useEffect(() => {
        MyAPI.get('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1')
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res.data.results)
                    setpopular(res.data.results);
                }
            })
    }, []);
  return (
    <div>
    <div className='pop' style={{marginTop:"0px"}}><h1>What's Popular</h1></div>
    <div id='cover_pop' className='cover container'>
        {popular.length>0?
            popular.map((item)=>{
            return(
                <div className="card">
                        <Link href={`/TV/${item.id}`}><img className='cursor-pointer' src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} alt="" /></Link>
                        <span className="name">{item.name}</span> <br />
                        <span className="date">{item.first_air_date}</span> <br />
                </div>
            )
        }):<Loading/>}

    </div>
    </div>
  )
}

export default Popular