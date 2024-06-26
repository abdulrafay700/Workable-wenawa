import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";


  
function Header() {

    const [isMenuOPen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOPen)
        console.log(isMenuOPen)  
      }


    return (

        <>
        <header className="container-fluid primary-bg py-2 d-flex align-items-center">
        <div className='d-xl-none d-lg-block' >
                                 <img src={logo} alt="" />
                    </div>
        <div className='container d-flex'>
                   
                {/* navbar */}
                <nav className='col-8 d-flex align-items-center d-xl-flex d-none' >
                        <div >
                            <img src={logo} alt="" />
                        </div>
                    <ul className="d-flex align-items-center gap-3 ">
                        <li className="">
                            <a className =" white-text " href="#" >Product</a>
                        </li>
                        <li>
                            <a className =" white-text " href="#" >Pricing</a>
                        </li>
                        <li>
                            <a className =" white-text " href="#" >Customers</a>
                        </li>
                        <li>
                            <a className =" white-text "  href="#" >Resources</a>
                        </li>
                    </ul>
                </nav>

                {/* left side login buttons */}

                <div className='align-items-center gap-3 d-xl-flex  d-none '>
                    <h6>login</h6>
                    <button className='primary-btn'>Request a demo</button>
                    <button className=' secondary-btn'>Start a free trial </button>
                </div>
            </div>

            {/* burger button controller */}
            <div  className="d-xl-none d-block" onClick={()=>toggleMenu()}>
                {/* { isMenuOPen?(<FaXmark className='icon burgerIcon'/>):(<RxHamburgerMenu className='icon '
                      />)} */}
                    <RxHamburgerMenu  className='icon'/>
                      
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
