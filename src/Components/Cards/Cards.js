import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
function Cards() {
  return (
    <div className='cards'>
      <h1>مقاصد برتر</h1>
      <div className='cards__container'>
          <ul className='cards__items__ul'>
            <CardItem path='/' label='ناشناخته ها'
              src='images/9.jpg'
              text='دیدن آبشار ناشناخته در دل جنگل های آمازون' />
            <CardItem path='/' label='ناشناخته ها'
              src='images/8.jpg'
              text='کویری زیبا در قلب ایران' />
          </ul>
          <ul className='cards__items__ul'>
            <CardItem path='/' label='لاکچری'
              src='images/2.jpg'
              text='سفری خاطره انگیز در جزایر کاراییب' />
            <CardItem path='/' label='لاکچری'
              src='images/1.jpg'
              text='آرامشی عمیق در رشته کوه های آلپ' />
            <CardItem path='/' label='ناشناخته ها'
              src='images/6.jpg'
              text='تجربه ای متقاوت از گردش در شهر' />
          </ul>
      </div>
    </div>
  )
}

export default Cards