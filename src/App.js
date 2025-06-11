import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import OurMission from './Pages/OurMission';
import OurService from './Pages/OurService';
import ContactUs from './Pages/ContactUs';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="mission" element={<OurMission />} />
                    <Route path="services" element={<OurService />} />
                    <Route path="contact" element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
