"use client"

import React, { useState } from 'react'
import '@/app/css/TopBanner.css'

const TopBanner = () => {
  const [collectionname,setcollectionname] = useState("");
  console.log(collectionname);
  return (
    <div>
        <div className="top-banner container">
            <div className="content">
                <h1>Welcome.</h1>
                <span className="details">Millions of movies, TV shows and people to discover. Explore now.</span>
                <div className="serch">
                    <input type="text" placeholder='Search for a movie, tv show, person......' value={collectionname} onChange={(e)=>{setcollectionname(e.target.value)}} />
                    <a href={`/SearchDetails/${collectionname}`}><button><p>Search</p></button></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopBanner;