"use client"
import MyAPI from "@/app/config/axios"
import React,{useEffect,useState} from 'react';
import '@/app/TV/[id]/page.css'
import { Header } from "@/app/components/Header";
import { Dropdownicon } from "@/Dropdown/Dropdownmenu";
import { Dropdownicon1 } from "@/Dropdown/Dropdownmenu";
import { Dropdownicon2 } from "@/Dropdown/Dropdownmenu";
import { Dropdownicon3 } from "@/Dropdown/Dropdownmenu";
import { Dropdownover0 } from "@/Dropdown/Dropdownmenu";
import { Dropdownover1 } from "@/Dropdown/Dropdownmenu";
import { Dropdownover2 } from "@/Dropdown/Dropdownmenu";
import { Dropdownover3} from "@/Dropdown/Dropdownmenu";


const page = (para) => {
    const[tvId,settvId] = useState('');
    const [tvDetails,settvDetails] = useState({});
    const [dropicon,setdropicon] = useState(false)
    const [dropicon1,setdropicon1] = useState(false)
    const [dropicon2,setdropicon2] = useState(false)
    const [dropicon3,setdropicon3] = useState(false)
    const [dropover0,setdropover0] = useState(false)
    const [dropover1,setdropover1] = useState(false)
    const [dropover2,setdropover2] = useState(false)
    const [dropover3,setdropover3] = useState(false)

    useEffect(()=>{
        settvId(para.params.id)
    },[tvId]);

    useEffect(() => {
        MyAPI.get(`https://api.themoviedb.org/3/tv/${tvId}?language=en-US`)
          .then((res) => {
            if (res.status == 200) {
              settvDetails(res.data);
            }
            // console.log(res.data);
          })
      }, [tvId]);
      const backgroundposterStyle = {
        backgroundImage: `url('https://www.themoviedb.org/t/p/w500/${tvDetails.poster_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        width: '70%',
        height: '90%',
        objectFit:"cover"
      };

      const jio = {
        backgroundImage: `url('https://st1.techlusive.in/wp-content/uploads/2023/03/Jio-.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        width: '50px',
        height: '30px',
        objectFit:"cover",
      }

      const MouseEnter = ()=>{
        setdropicon(true);
      }
      const MouseLeave = ()=>{
        setdropicon(false);
      }
      const MouseEnter1 = ()=>{
        setdropicon1(true);
      }
      const MouseLeave1 = ()=>{
        setdropicon1(false);
      }
      const MouseEnter2 = ()=>{
        setdropicon2(true);
      }
      const MouseLeave2 = ()=>{
        setdropicon2(false);
      }
      const MouseEnter3 = ()=>{
        setdropicon3(true);
      }
      const MouseLeave3 = ()=>{
        setdropicon3(false);
      }
      const MouseEnterover0 = ()=>{
        setdropover0(true);
      }
      const MouseLeaveover0 = ()=>{
        setdropover0(false);
      }
      const MouseEnterover1 = ()=>{
        setdropover1(true);
      }
      const MouseLeaveover1 = ()=>{
        setdropover1(false);
      }
      const MouseEnterover2 = ()=>{
        setdropover2(true);
      }
      const MouseLeaveover2 = ()=>{
        setdropover2(false);
      }
      const MouseEnterover3 = ()=>{
        setdropover3(true);
      }
      const MouseLeaveover3 = ()=>{
        setdropover3(false);
      }

  return (
    <div>
        <Header/>
        <div className="drop">
            <div className="oicon">
                <p onMouseEnter={MouseEnterover0} onMouseLeave={MouseLeaveover0}>Overview</p>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
            {dropover0 && <Dropdownover0 />}

            <div className="oicon">
                <p onMouseEnter={MouseEnterover1} onMouseLeave={MouseLeaveover1}>Media</p>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
            {dropover1 && <Dropdownover1 />}

            <div className="oicon">
                <p onMouseEnter={MouseEnterover2} onMouseLeave={MouseLeaveover2}>Fandom</p>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
            {dropover2 && <Dropdownover2/>}

            <div className="oicon">
                <p onMouseEnter={MouseEnterover3} onMouseLeave={MouseLeaveover3}>share</p>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
            {dropover3 && <Dropdownover3/>}

        </div>
        <div className="main4">
            <div className="background">
                <img src={`https://image.tmdb.org/t/p/w500/${tvDetails.backdrop_path}`} alt="" />
                <div className="overlay">
                    <h1>{tvDetails.original_name}</h1>
                    <div className="tvpg">
                        <p>TV-PG</p>
                    </div>
                    <div className="icons">
                        <div className="one" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                        <i class="ri-list-unordered"></i>
                        </div>
                        <div className="one" onMouseEnter={MouseEnter1} onMouseLeave={MouseLeave1}>
                        <i class="ri-heart-fill"></i>
                        </div>
                        <div className="one" onMouseEnter={MouseEnter2} onMouseLeave={MouseLeave2}>
                        <i class="ri-bookmark-line"></i>
                        </div>
                        <div className="one" onMouseEnter={MouseEnter3} onMouseLeave={MouseLeave3}>
                        <i class="ri-star-fill"></i>
                        </div>
                        <div className="play">
                            <i class="ri-play-fill"></i>
                            <p>play trailer</p>
                        </div>
                    </div>
                    {dropicon && <Dropdownicon />}
                    {dropicon1 && <Dropdownicon1 />}
                    {dropicon2 && <Dropdownicon2 />}
                    {dropicon3 && <Dropdownicon3 />}
                    <div className="overview">
                        <h1>Overview</h1>
                        <p>{tvDetails.overview}</p>
                        <h4>({tvDetails.first_air_date})</h4>
                    </div>
                </div>
                <div className="leftposter">
                    <div className="leftimg cursor-pointer" style={backgroundposterStyle}>
                        <div className="stream">
                            <div className="img cursor-pointer" style={jio}>
                            </div>
                            <div className="text">
                                <p className="cursor-pointer">Now Streaming</p>
                                <h6 className="cursor-pointer">Watch now</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page