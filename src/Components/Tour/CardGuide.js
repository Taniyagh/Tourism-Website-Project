import React from 'react'
import './CardGuide.css'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
const INFOSection1 = [
  {
    text: 'تمام تورها'
  },
  {
    text: 'تورهای خارجی'
  },
  {
    text: 'تورهای داخلی'
  },
  {
    text: 'تورهای یک روزه'
  }

]
const INFOSection2 = [
  {
    text: 'تور کویر'
  },
  {
    text: 'تور جنگلنوردی'
  },
  {
    text: 'تور سافاری'
  },
  {
    text: 'تور کمپینگ طبیعت گردی'
  }
]
function CardGuide() {
  return (
    <>
      <div className='container'>
        <div className='tour__tabs'>
          <div className='tour__wrapper' style={{ display: 'flex', flexDirection: 'column' }}>
            <ul className='nav-tabs'>
              {
                INFOSection1.map((item, index) => {
                  return <li key={index}>
                    <Link to='/' className='anchor'>
                      <h5>{item.text}</h5>
                    </Link>
                  </li>

                })
              }
            </ul>
            <ul className='nav-tabs'>
              {
                INFOSection2.map((item, index) => {
                  return <li key={index}>
                    <Link to='/' className='anchor'>
                      <h5>{item.text}</h5>
                    </Link>
                  </li>

                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='tour__tabs'>
          <div className='tab-content'>
              <div className='tab-pane'>
                <header className='tab-header'>
                  <div className='tab-text'>تور</div>
                  <div className='tab-sort-filter tab-text'>مرتب شده بر اساس
                  <span className='selectTours'>
                    <select className='tab-sort-input'>
                      <option value='newest'>جدیدترین</option>
                      <option vaue='cheapest'>ارزان ترین</option>
                      <option value='viewcount'>پربازدیدترین</option>
                    </select>
                  </span>
                  </div>
                </header>
                <div className='tabs-content'>
                  <ul>
                    <li>
                      <Link className='anchor' to='/tour'>
                        <span>تور کیش دو روز و سه شب</span>
                        <p>از 1600000 تومان</p>
                        <p>از ۲ آذر الی 4 آذر 1401</p>
                        <p>شرکت خدمات سفر تعطیلات</p>
                      </Link>
                    </li>
                    <li>
                      <Link className='anchor' to='/tour'>
                        <span>تور کیش دو روز و سه شب</span>
                        <p>از 1600000 تومان</p>
                        <p>از ۲ آذر الی 4 آذر 1401</p>
                        <p>شرکت خدمات سفر تعطیلات</p>
                      </Link>
                    </li>
                  </ul>
                  <div className='more-tour-button'>
                    <Button buttonstyle='btn--tour' buttonsize='btn--large' to='/tour'>تورهای بیشتر</Button>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default CardGuide