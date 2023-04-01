import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { AppProvider } from './App';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Signin from "./pages/login/Signin";
import Reset from "./pages/ForgotPass/Reset";
import NewPass from "./pages/NewPassword/NewPass";
import Signup from "./pages/Signup/Signup";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "signin" element = {<Signin />} />
          <Route path = "reset-password" element = {<Reset />} />
          <Route path = "new-password" element = {<NewPass />} />
          <Route path = "signup" element = {<Signup />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

