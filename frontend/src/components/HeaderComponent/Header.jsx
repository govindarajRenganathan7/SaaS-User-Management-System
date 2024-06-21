import React from 'react';
import logo from '../../assets/Images/logo.jpg';
import './header.css';
const Header = () => {
  return (
    <header className='header'>

        <div className='header__container header'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <nav className='navigation__section'>
                <span className='section__items'>Products</span>
                <span className='section__items'>Templates</span>
                <span className='section__items'>Resources</span>
            </nav>
            <div className='registration__section'>
                <span className='section__items'>Login</span>
                <button className='section__items'>Get Started</button>
            </div>
        </div>

    </header>
  )
}

export default Header
