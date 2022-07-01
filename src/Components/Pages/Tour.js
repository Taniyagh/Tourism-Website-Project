import React from 'react'
import '../../App.css'
import Button from '../UI/Button'
import CardGuide from '../Tour/CardGuide'
function Tour() {
    return (
        <>
            <div className='tourism' style={{ backgroundImage: 'url(images/tourism.jpg)' }} >
                <div className='tourism-box'>
                    <input type='text' className='search-input' placeholder='نام شهر یا کشور' style={{ height: '55px' }} />
                    <Button buttonstyle='btn--search--place' buttonsize='btn--large' to='/tourism'>
                        جستجوی
                    </Button>
                </div>
            </div>
            <CardGuide/>
        </>
    )
}

export default Tour