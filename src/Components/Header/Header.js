import React from 'react';
import img from '../../Image/spaceX-header.jpg';
import logo from '../../Image/rocket.png';

const Header = () => {
    const header_bg = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%'
    };

    return (
        <div style={header_bg}>
            <div className='p-5' style={{width: '250px'}}>
                <img className='img-fluid' src={logo} alt="LOGO" />
            </div>
            <div className='pt-4 ps-5'>
                <h2 className='fw-bold' style={{fontSize: '80px'}}>
                Travelling to the edges <br /> of the <span className='text-danger'>Spaces</span>
                </h2>
            </div>
        </div>
    );
};

export default Header;