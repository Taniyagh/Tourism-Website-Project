import React,{useState,useEffect} from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'
import Button from '../UI/Button';
const NavBar = () => {
    const [menueState,setMenueState]=useState(false)
    const [buttonState,setButtonState]=useState(true)
    const MenueHandler=()=>{
        setMenueState(!menueState)
    }

    const closeMobileMenue=()=>{
        if(window.innerWidth<=960){
            setMenueState(false)
        }else{
            setButtonState(true)
        }   
    }

    const buttonHandler=()=>{
        if(window.innerWidth<960){
            setButtonState(false)
        }else{
            setButtonState(true)
        }
            
    }
    
    useEffect(()=>{
        if(window.innerWidth<960){
            setButtonState(false)
        }else{
            setButtonState(true)
        }
    })
    window.addEventListener('resize',buttonHandler)

    return ( 
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Travel <i className='fab fa-typo3'></i>
                </Link>
                <div className='menue-icon' onClick={MenueHandler}>
                    <i className={menueState? 'fas fa-times': 'fas fa-bars'} onClick={MenueHandler}/>
                </div>
                <ul className={menueState? 'nav-menue active':'nav-menue'} onClick={MenueHandler}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenue} onClick={MenueHandler}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tourism' className='nav-links'>
                            گردشگری
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tour' className='nav-links'>
                            تور
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenue}>
                        ثبت نام و ورود
                        </Link>
                    </li>
                </ul>
                {
                    buttonState?
                    <Button buttonstyle='btn-outline' to='/sign-up'>ثبت نام و ورود</Button>:
                    null
                }
            </div>
        </nav>
     );
}
 
export default NavBar;