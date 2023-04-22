import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import ContactUs from "../ContactUs";
import Home from "../Home";
import Services from "../Services";
import WhyUs from "../WhyUs";
import PrevWork from '../PrevWork';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={ <ContactUs /> } />
                    <Route path="why-us" element={ <WhyUs /> } />
                    <Route path="services" element={ <Services /> } />
                    <Route path="prev-work" element={ <PrevWork /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;