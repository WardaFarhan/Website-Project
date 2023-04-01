import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    
    <main>
      <Header />
    <Outlet />
    <Footer />
   </main>
  )
}

export default Home
