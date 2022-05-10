import React from 'react';
import logo from '../../Image/rocket.png';
import img from '../../Image/spaceX-header.jpg';

function Header() {
    const headerBg = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
    };

    return (
        <div style={headerBg}>
            <div className="p-5" style={{ width: '250px' }}>
                <img className="img-fluid" src={logo} alt="LOGO" />
            </div>
            <div className="pt-4 ps-5">
                <h2 className="fw-bold" style={{ fontSize: '80px' }}>
                    Travelling to the edges <br /> of the{' '}
                    <span className="text-danger">Spaces</span>
                </h2>
            </div>
        </div>
    );
}

export default Header;
