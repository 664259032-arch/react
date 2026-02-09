import React from 'react';

const Features = () => {
    const featuresList = [
        {
            title: "Lightning Fast",
            description: "Optimized for speed and performance, ensuring your users never wait.",
            icon: "⚡"
        },
        {
            title: "Secure by Design",
            description: "Enterprise-grade security features built-in from the ground up.",
            icon: "🔒"
        },
        {
            title: "Easy Integration",
            description: "Seamlessly integrates with your existing tools and workflows.",
            icon: "🔄"
        }
    ];

    return (
        <section id="features" className="features">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
                {featuresList.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
