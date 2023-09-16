'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MyAPI from '../config/axios';
import '@/app/css/Trailer.css'
import Loading from '../Loading/loading';

const Trailer=()=>{
    const [trailer, settrailer] = useState([]);

    useEffect(() => {
        MyAPI.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res.data.results)
                    settrailer(res.data.results);
                }
            })
    }, []);


    return (
      <div>
        <div className='main container'>
        <div className='over'>
          <h1>Latest trailers</h1>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/9qtdUCHwVUMzOSxK27BNBBkKuOe.jpg" alt="" />
              <Link href={"https://youtu.be/28k_9AjSuLM"}><i class="ri-play-fill"></i></Link>
            </div>
            <div className='boxobottom'>
              <h6>The Hunger Games</h6>
              <p>Fathom Events Spot</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/kjKmRxIQxWbenjIfXPQktV7w3aM.jpg" alt="" />
              <Link href={"https://youtu.be/3GPaFwcoqrY"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>American Horror Story</h6>
              <p>Delicate Official Teaser - Having It All</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/brC6qt6QLcWhVl1wsDp1dX9Lim.jpg" alt="" />
              <Link href={"https://youtu.be/ZO-XX1UpsqY"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Succession</h6>
              <p>Official Series Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg" alt="" />
              <Link href={"https://youtu.be/XPG0MqIcby8?si=s1N0so0SLo8zl-TH"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>The Simpsons</h6>
              <p>Season 35 Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/qrBSBZpXMtCdZ32juLY3dvPk0Rl.jpg" alt="" />
              <Link href={"https://youtu.be/HDGDcJtIGaA"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Archer</h6>
              <p>Season 14, Episode 4 Trailer - Barry is Back</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/nGsqwOBlzZkjiAsAOu1nvMsxy5q.jpg" alt="" />
              <Link href={"https://youtu.be/KsmJiQ-JvTo"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>De Humani Corporis Fabrica</h6>
              <p>MUBI's Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/sBwgerIn0FVGbZBmvpWucyAG4zT.jpg" alt="" />
              <Link href={"https://youtu.be/58j16ansB9M?si=xVM5_eD4l34W_u47"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Fear the Walking Dead</h6>
              <p>This is How We Survive | Final Episodes Teaser</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/658d0TCVa2I5LqgbwCqPPKyuU2i.jpg" alt="" />
              <Link href={"https://youtu.be/c0sIj_XF4tg"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Pokémon</h6>
              <p>Ultimate Journeys Part 4 Official Trailer 2</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/e3o0Dwlzzpd4kJpOOJgVyMstnII.jpg" alt="" />
              <Link href={"https://youtu.be/rDy7E6pNBSc"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Fear and Desire</h6>
              <p>Premiere Version Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/bxTRLwRy5E3d97loCxXp136vDDu.jpg" alt="" />
              <Link href={"https://youtu.be/Bq-kHF7BoPI"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>The Misfit of Demon King Academy</h6>
              <p>Episode 9 Preview [Subtitled]</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/9In9QgVJx7PlFOAgVHCKKSbo605.jpg" alt="" />
              <Link href={"https://youtu.be/7cTe55sflTw"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Rick and Morty</h6>
              <p>Summer and Beths Season 7 Announcement</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg" alt="" />
              <Link href={"https://youtu.be/UQeTCD-VD2Y"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Elemental</h6>
              <p>Date Announce | Elemental | Disney+</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/v9L9ydhE5gExur77cLGyaxGNJoN.jpg" alt="" />
              <Link href={"https://youtu.be/xenOE1Tma0A"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Jailer</h6>
              <p>Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/4cklUlcOaG0NqvTMnzZaXfWhaXB.jpg" alt="" />
              <Link href={"https://youtu.be/QWKLkT3AgsI"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Winning Time</h6>
              <p>Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/aRKQdF6AGbhnF9IAyJbte5epH5R.jpg" alt="" />
              <Link href={"https://youtu.be/l6kp780S-os"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>ONE PIECE</h6>
              <p>Final Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/mOAfltAX1xtY6kunfAmF4BZjO8A.jpg" alt="" />
              <Link href={"https://youtu.be/3tgXUpKtEns"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>The Pink Panther Strikes Again</h6>
              <p>Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uHztAwe3iWDC5I0W1tDZ5fUtRRQ.jpg" alt="" />
              <Link href={"https://youtu.be/6_uvMK0dbMY"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>The Cabinet of Dr. Caligari</h6>
              <p>Masters of Cinema Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/xVMVIetkeKgdqKmROK1tBjxivYG.jpg" alt="" />
              <Link href={'https://youtu.be/HaIyoo-KLHk'}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>The Morning Show</h6>
              <p>Season 3 Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/wN8JKRHfNjJpD2BiOtFxShb1VDY.jpg" alt="" />
              <Link href={"https://youtu.be/SRhDjptowzE?si=fz21c3cXZshEcq2C"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Haddi</h6>
              <p>#Haddi | Official Trailer</p>
            </div>
          </div>
          <div className='boxo'>
            <div className='boxotop'>
              <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/kjUcLbTOtEnZh4D6tZ88RNK6dc3.jpg" alt="" />
              <Link href={"https://youtu.be/s7PujHSPPm4"}><i class="ri-play-fill"></i></Link>

            </div>
            <div className='boxobottom'>
              <h6>Burning Body</h6>
              <p>Official Trailer [Subtitled]</p>
            </div>
          </div>
          
          </div>
          
        </div>
      </div>
        
    )
                        
}
export default Trailer ;