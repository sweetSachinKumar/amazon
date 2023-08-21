import React from 'react'
import './Banner.css'
import bann from './ban_ner.jpg'
import Product from './Product'
const Banner = () => {
  return (
    <div className='home'>
      <img src={bann} className='home__img' alt="" />
      {/* product IdleDeadline, title, price, rating, image  */}
     {/* product  */}

<div className="home__row">

     <Product  
     id="314"
     title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set"
     price={11.96}
     rating={5}
    image="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_FMwebp_QL65_.jpg"
     />
     <Product  
     id="342"
     title="SAMSUNG EVO Select Micro SD-Memory-Card + Adapter, 256GB microSDXC 130MB/s"
     price={16}
     rating={4}
    image="	https://m.media-amazon.com/images/I/71tK21fYkDL._AC_UL480_FMwebp_QL65_.jpg"
     />
</div>
<div className="home__row">

     <Product  
     id="343"
     title="Amazon Basics microSDXC Memory Card with Full Size Adapter, A2, U3, Read Speed up to 100 MB/s, 128 GB"
     price={10}
     rating={5}
    image="	https://m.media-amazon.com/images/I/61DwejyTGkL._AC_UL480_FMwebp_QL65_.jpg"
     />
     <Product  
     id="344"
     title="GoPro HERO11 Black - Waterproof Action Camera with 5.3K60 Ultra HD Video, 27MP Photos"
     price={146}
     rating={5}
    image="	https://m.media-amazon.com/images/I/617sGSjmC1L._AC_UL480_FMwebp_QL65_.jpg"
     />
     <Product  
     id="35"
     title="Digital Camera, FHD 1080P, Digital Point and Shoot, 44MP for Vlogging with Anti Shake 16X Zoom, Compact"
     price={46}
     rating={5}
    image="	https://m.media-amazon.com/images/I/61JavBEclHL._AC_UL480_FMwebp_QL65_.jpg"
     />
</div>



<div className="home__row">

     <Product  
     id="534"
     title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set"
     price={115.96}
     rating={5}
    image="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_FMwebp_QL65_.jpg"
     />
     
</div>

    </div>
  )
}


export default Banner
