import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-6 text-center mt-[100px]">
            © {new Date().getFullYear()} Food Restaurant. All rights reserved.
        </footer>
    );
};

export default Footer;
