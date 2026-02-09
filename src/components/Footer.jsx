import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo" style={{ fontSize: '1.2rem' }}>BrandName</div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Support</a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} BrandName Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
