import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <h1>Modern web solutions</h1>
            <p>Build faster, scale better, and deliver exceptional user experiences with our cutting-edge platform.</p>
            <div className="hero-buttons">
                <button className="cta-button">Start Free Trial</button>
                <button style={{ background: 'transparent', border: '1px solid #555', color: '#fff' }}>Learn More</button>
            </div>
        </section>
    );
};

export default Hero;
