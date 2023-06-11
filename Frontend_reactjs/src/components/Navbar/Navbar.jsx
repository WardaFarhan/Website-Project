import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import {} from "react-router-dom";
// import logoImg from "../../images/logo.jpg";
import logoImg from "../../images/logs.png"
import {HiOutlineMenuAlt3} from "react-icons/hi";
//import Signin from '../../pages/login/Signin';
//import Signup from '../../pages/Signup/Signup';
import Auth from '../../utils/auth';
import { USER_LOGOUT } from '../../actions/constants';

const AppNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  // set modal display state
  //const [showModal, setShowModal] = useState(false);
  //useEffect(() => {}, [userInfo]);

  return (
   
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
           {/* <span className='text-uppercase fw-7 fs-24 ls-1'>Book Recommendation System</span> */}
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>about</Link>
            </li>
            <li className='nav-item'>
            <Link to = "signin" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Signin</Link>
           {/* if user is logged in show saved books and logout 
            {
              Auth ?
              <li className='nav-item'>
          <Link onClick={USER_LOGOUT} to ="signin " className='nav-link text-uppercase fs-22 fw-6 ls-1' >Logout</Link>
            </li>
            :
            <li className='nav-item'>
          <Link to ="signin " className='nav-link text-uppercase fs-22 fw-6 ls-1' >Signin/Signout</Link>
            </li>
            
            }
            */} 
            </li> 
          </ul>
        </div>
      </div>
    </nav>

 
  );
};

export default AppNavbar


 {/*  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {userInfo ? (
              <>
                
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <LinkContainer to = "/profile">
                  <NavDropdown.Item >
                  My Profile
                </NavDropdown.Item>
                  </LinkContainer>
                

                  <NavDropdown.Item href="/saved">
                  
                   My Books
                </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/signin">Signin</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
             */}