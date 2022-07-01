import React from 'react'
import './HeroSection.css'
import Button from '../UI/Button'
function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/1.mp4' autoPlay loop muted/>
        <div className='hero-buttons'>
            <input className='search-input' type='text' 
            placeholder='جستجوی مکان‌‌‌‍٬ شهر ٬ کشور و...' />
            <Button buttonstyle='btn--search' to='/' >
                جستجو
            </Button>
        </div>
    </div>
  )
}

export default HeroSection