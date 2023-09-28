import React from 'react';
import background from '/public/images/discord_background_1.png';
import './AuthLayout.css';  // Import the CSS file for styles

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="auth-layout">
        <div className="background-container">
            <img src={background.src} alt="Background" className="background-image" />
        </div>
        <div className="content-container justify-center  ">
            {children}
        </div>
        </div>
    );
};

export default AuthLayout;
