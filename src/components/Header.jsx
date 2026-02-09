import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">BrandName</div>
            <nav className="nav-links">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <button className="cta-button">Get Started</button>
        </header>
    );
};

export default Header;
