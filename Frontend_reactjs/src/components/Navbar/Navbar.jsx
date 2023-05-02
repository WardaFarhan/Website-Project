import React, {useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";
import { Navbar, Nav, Modal, Tab } from 'react-bootstrap';

import {} from "react-router-dom";
// import logoImg from "../../images/logo.jpg";
import logoImg from "../../images/logs.png"
import {HiOutlineMenuAlt3} from "react-icons/hi";
import Signin from '../../pages/login/Signin';
import Signup from '../../pages/Signup/Signup';
import Auth from '../../utils/auth';




const AppNavbar = () => {


  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  // set modal display state
  const [showModal, setShowModal] = useState(false);
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
           {/* <Link to = "signin" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Signin</Link> */}
           {/* if user is logged in show saved books and logout */}
           <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
           {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
       
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='signin'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='signin'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='signin'>
                <Signin handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
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