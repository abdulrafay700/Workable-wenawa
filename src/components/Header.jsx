import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";


  
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOPen, setIsMenuOpen] = useState(false)

    // for togleer
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOPen)
        console.log(isMenuOPen)  
      }

    //   for scrolling

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

     
    

    return (

        <>
        <header className={`container-fluid ${isScrolled?"white-bg":"primary-bg"} py-2 d-flex align-items-center`}>
        <div className='d-xl-none d-lg-block' >
                    <img src={logo} alt="" />
            </div>
        <div className='container d-flex'>
                   
                {/* navbar */}
                <nav className='col-7 d-flex align-items-center d-xl-flex d-none' >
                        <div >
                            <img src={logo} alt="" />
                        </div>
                    <ul className="d-flex align-items-center gap-5 ">
                        <li className="">
                            <a className ={`${isScrolled?"black-text":"white-text"}`} href="#" >Product</a>
                        </li>
                        <li>
                            <a className ={`${isScrolled?"black-text":"white-text"}`} href="#" >Pricing</a>
                        </li>
                        <li>
                            <a className ={`${isScrolled?"black-text":"white-text"}`} href="#" >Customers</a>
                        </li>
                        <li>
                            <a className ={`${isScrolled?"black-text":"white-text"}`}  href="#" >Resources</a>
                        </li>
                    </ul>
                </nav>

                {/* left side login buttons */}

                <div className='align-items-center gap-3 d-xl-flex  d-none '>
                    <a className ={`login ${isScrolled?"black-text":"white-text"}`}>login</a>
                    <button className={`${isScrolled?"primary-btn-1-scroll":"primary-btn-1"}`}>Request a demo</button>
                    <button className={`${isScrolled?"secondary-btn-1-scroll":"secondary-btn-1"}`}>Start a free trial </button>
                </div>
            </div>

            {/* burger button controller */}
            <div  className="d-xl-none d-block" onClick={()=>toggleMenu()}>
                {/* { isMenuOPen?(<FaXmark className='icon burgerIcon'/>):(<RxHamburgerMenu className='icon '
                      />)} */}
                    <RxHamburgerMenu  className ={`icon ${isScrolled?"black-text":"white-text"}`}/>
                      
            </div>
            {/* burger button controller end */}
        </header>


        
                    
        <div className={`mobile-menu d-xl-none  ${isMenuOPen? "d-flex flex-column" : "d-none"}`}>
                <div className="close-btn icon" onClick={toggleMenu}>
                    <FaXmark />
                </div>

                        
                <ul className="d-flex flex-column  gap-5">
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a  href="#">Pricing</a>
                    </li>
                    <li>
                        <a  href="#">Customers</a>
                    </li>
                    <li>
                        <a  href="#">Resources</a>
                    </li>
                </ul>
                <div className='align-items-center gap-3 mb-3 d-flex flex-column' >
                    <h6>Login</h6>
                    <button className='primary-btn'>Request a demo</button>
                    <button className='secondary-btn'>Start a free trial</button>
                </div>
            </div>
        </>   
    );
}

export default Header;
