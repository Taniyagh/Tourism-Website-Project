import React from 'react'
import './CardsGuide.css'
function CardItem(props) {
const {src,title,text}=props
  return (
    <li className='cards__items'>
        <div className='compare-item'>
            <div className='compare-image-list'>
                <img src={src}/>
                <div className='compare-item-title'>
                    {title}
                </div>
                <div className='compare-item-text'>
                    {text}
                </div>
            </div>
        </div>
    </li>
  )
}

export default CardItem
