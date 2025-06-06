import React, { createContext, useState } from 'react'

import hero from "../assets/home-page/Hero/hero-img.png" 
import buy from "../assets/home-page/sales/Buy.jpeg"
import upcomingSeason from "../assets/home-page/sales/upcomingSeason.jpeg"
import blog from "../assets/Blog-Page/Bbg.jpeg"
import about from "../assets/About/about-banner.png"
import Shop from "../assets/home-page/shop-intro-bg.jpg"
import banner from "../assets/home-page/super-sale.jpeg"




export const BackgroundContext = createContext()
const SetBackgroundContext = (props) => {
    const [Bg , setBg] = useState([
        {HeroBG : hero},
        {buyOneGetOneBg : buy},
        {upcomingSeasonBG : upcomingSeason},
        {blogHeaderBg : blog},
        {aboutHeaderBg : about},
        {ShopHeaderBg : Shop},
        {bannerBg : banner}
    ])

  return (
    <div>
    <BackgroundContext.Provider value={{Bg , setBg}} >
    {props.children}
    </BackgroundContext.Provider>
    </div>
  )
}

export default SetBackgroundContext