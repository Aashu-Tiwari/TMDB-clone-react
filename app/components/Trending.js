// import React, { useEffect, useState } from 'react'
// import axios from '@/app/config/axios';
// import { data } from 'autoprefixer';

// const Trending = () => {
//     const [Movies,setmovies] = useState([]);
//     const api_key = "5047958519c29526b50017d6"

//     const getMovies = async ()=>{
//         try{
//             const {data} = await axios.get(`trending/tv/day?language=en-US`);
//             setmovies(data);
//         }catch(error){
//             console.log(error)
//         }
//     }
//         useEffect(()=>{
//             console.log("api called!")
//             getMovies();
//         })
//   return (
//     <div>
//         <h1>Trending</h1>
//         {Movies.map((item)=>{
//             return(
//                 <div className='container' key={item.id}>
//                     <h1>{item.title}</h1>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }
// export default Trending

'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MyAPI from '../config/axios';
import '@/app/css/trending.css'
import Loading from '../Loading/loading';

function Trending() {
    const [today, setToday] = useState([]);

    useEffect(() => {
        MyAPI.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US')
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.results)
                    setToday(res.data.results);
                }
            })
    }, []);

    return (
        <div className='p'><h1>Trending</h1>
        <div className='cover mt-4'>
            {today.length > 0
            ? today.map((item)=>{
                return(
                    <div className="card">
                        <Link href={`/TV/${item.id}`}><img className='cursor-pointer' src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} alt="" /></Link>
                        <span className="name">{item.name}</span> <br />
                        <span className="date">{item.first_air_date}</span> <br />
                </div>
                )
            })
            :<Loading/>}
        </div>
        </div>
    )
                        
}
export default Trending ;