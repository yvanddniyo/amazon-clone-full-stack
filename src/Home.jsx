import React, { useState } from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img 
          className='Home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.-AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/61IhhXJSHtL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor"
          price={119.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={3}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generationn) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300X400_retinamobilex2$.jpg"
          rating={5}
        />
        <Product
          id="4903850"
          title="New Apple iPad Pro(12.9inch, Wi-Fi, 123GB)- Silver (4th Generation"
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          rating={4}
        />
          
        </div>
        <div className="home__row">
           <Product 
               id="90829332"
               title="Samsung LC49RG90SSUXEN 49' Curved LED Gamung Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
               price={1094.98}
               image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
               rating={4}
           />
           
        </div>
      </div>
    </div>
  )
}

export default Home