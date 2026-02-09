import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />
            <div className="hero min-h-[calc(100vh-64px)]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Welcome to the dashboard. This is the protected home page that you can only see after logging in.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
