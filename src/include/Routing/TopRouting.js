import React, { lazy } from 'react';

import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import BeforeHeader from '../BeforeHeader';
import Header from '../Header';
import AboutUs from './../pages/About';
import Home from './../pages/Home';
import Service from './../pages/Service';

// const Home = lazy(()=> import('./../pages/Home'));
// const AboutUs = lazy(()=> import('./../pages/About'));
// const Service = lazy(()=> import('./../pages/Service'));

function TopRouting(){
    return(
        <>





<Routes>



<Route path="/" element={<Home/>} />
<Route path="/about" element={<AboutUs/>} />
<Route path='/service' element={<Service />} />

</Routes>



</>
    );
}

export default TopRouting;