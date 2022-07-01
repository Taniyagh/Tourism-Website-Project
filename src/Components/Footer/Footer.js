import React from 'react';
import './Footer.css';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading '>
                    به خبرنامه ما بپیوندید تا از آفرهای تورهای ایرانگردی و جهانگردی با خبر شوید
                </p>
                <p className='footer-subscription-text'>
                    هر زمانی که بخواهید می توانید عضویت خود را لغو نمایید.
                </p>
                <div className='input-area'>
                    <form>
                        <input className='footer-input' type='email' placeholder='لطفاْ ایمیل خود را وارد کنید'/>
                        <Button buttonstyle='btn--special' to='/'>عضویت</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>درباره ما </h2>
                        <Link to='/'>موقعیت های شغلی</Link>
                        <Link to='/'>تماس با ما</Link>
                        <Link to='/'>همکاری با ما</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>راهنما</h2>
                        <Link to='/'>نقشه سایت</Link>
                        <Link to='/'>سوالهای متداول</Link>
                        <Link to='/'>حریم شخصی</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>رزرو</h2>
                        <Link to='/'>رزرو هتل</Link>
                        <Link to='/'>رزرو بلیط هواپیما</Link>
                        <Link to='/'>رزرو بلیط قطار</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>شبکه های اجتماعی</h2>
                        <Link to='/'>اینستاگرام</Link>
                        <Link to='/'>توییتر</Link>
                        <Link to='/'>لینکدین</Link>
                    </div>
                </div>               
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Travel <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Travel ©2020
                    </small>
                    <div className='social-icons'>
                    <Link 
                            className="social-icon-link facebook"
                            target="_blank"
                            aria-label="Facebook"
                            to="/"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            target="_blank"
                            aria-label="Instagram"
                            to="/"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                            className="social-icon-link twitter"
                            target="_blank"
                            aria-label="Twitter"
                            to="/"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link 
                            className="social-icon-link linkedin"
                            target="_blank"
                            aria-label="Linkedin"
                            to="/"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Footer;