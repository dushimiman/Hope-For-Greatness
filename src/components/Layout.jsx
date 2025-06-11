import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // ✅ Correct place to import Footer

function Layout() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                <a href="/" className="navbar-brand">
                    <img
                        className="rounded-circle flex-shrink-0"
                        src="/Assets/img/logo.jpg"
                        alt="Logo"
                        style={{ width: '150px', height: '130px' }}
                    />
                </a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto">
                        <a href="/" className="nav-item nav-link">Home</a>
                        <a href="/about" className="nav-item nav-link">About Us</a>
                        <a href="/mission" className="nav-item nav-link">Our Mission</a>
                        <a href="/services" className="nav-item nav-link">What we do</a>
                        <a href="/contact" className="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="#" className="btn bg-logo-green text-white rounded-pill px-3 d-none d-lg-block">

                        Join Us<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                </div>
            </nav>

            {/* Page content */}
            <Outlet />

            {/* Global Footer */}
            <Footer />
        </>
    );
}

export default Layout;
