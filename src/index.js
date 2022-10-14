import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from "react-router-dom"


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.css';
import "animate.css/animate.css";
import BeforeHeader from './include/BeforeHeader';
import Header from './include/Header';
import Slider from './include/Slider';
import Footer from './include/Footer';

import TopRouting from './include/Routing/TopRouting';
import {Outlet} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <BeforeHeader></BeforeHeader>
      <Header></Header>
      <Slider></Slider>
      <TopRouting></TopRouting>
      {/* <Outlet></Outlet> */}
      <Footer></Footer>
    </BrowserRouter>
    

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
