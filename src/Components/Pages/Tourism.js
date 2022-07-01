import '../../App.css'
import React from 'react'
import Button from '../UI/Button'
import CardsGuide from '../Tourism/CardsGuide'
import Cards from '../Cards/Cards'
function Tourism() {
    return (
        <React.Fragment>
            <div className='tourism' style={{ backgroundImage: `url(images/tourism.jpg)` }}>
                <h1 style={{ color: '#fff', fontSize: '35px' }}>پورتال جامع گردش و سفر</h1>
                <p style={{ color: '#fff', fontSize: '25px' }}> مقصدتان را بیابید</p>
                <div className='tourism-box'>
                    <input type='text' className='search-input' placeholder='جستجوی کشور٬شهر و...' style={{ height: '55px' }} />
                    <Button buttonstyle='btn--search--place' buttonsize='btn--large' to='/tourism'>
                        جستجوی
                    </Button>
                </div>             
            </div>
            <CardsGuide />
            <Cards/>
        </React.Fragment>

    )
}

export default Tourism