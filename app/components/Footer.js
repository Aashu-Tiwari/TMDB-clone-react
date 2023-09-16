import React from 'react'
import "@/app/css/Footer.css"

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='inner_footer container'>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                <div className='footer_content'>
                    <div className='footer_content1'>
                    <h1 className='cursor-pointer'>THE BASICS</h1>
                    <h6 className='cursor-pointer'>About TMDB</h6>
                    <h6 className='cursor-pointer'>Contact Us</h6>
                    <h6 className='cursor-pointer'>Support Forums</h6>
                    <h6 className='cursor-pointer'>API</h6>
                    <h6 className='cursor-pointer'>System Status</h6>
                    </div>
                    <div className='footer_content2'>
                    <h1 className='cursor-pointer'>GET INVOLVED</h1>
                    <h6 className='cursor-pointer'>Contribution Bible</h6>
                    <h6 className='cursor-pointer'>Add New Movie</h6>
                    <h6 className='cursor-pointer'>Add New TV Show</h6>
                    </div>
                    <div className='footer_content3 '>
                    <h1 className='cursor-pointer'>COMMUNITY</h1>
                    <h6 className='cursor-pointer'>Guidelines</h6>
                    <h6 className='cursor-pointer'>Discussions</h6>
                    <h6 className='cursor-pointer'>Leaderboard</h6>
                    <h6 className='cursor-pointer'>Twitter</h6>
                    </div>
                    <div className='footer_content4'>
                    <h1 className='cursor-pointer'>LEGAL</h1>
                    <h6 className='cursor-pointer'>Terms of use</h6>
                    <h6 className='cursor-pointer'>API Terms of Use </h6>
                    <h6 className='cursor-pointer'>Privacy Policy</h6>
                    <h6 className='cursor-pointer'>DMCA Takedown Request</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer