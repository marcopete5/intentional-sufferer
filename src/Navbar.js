import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='linkContainer'>
          <Link to='/' className='links' id='home'>Home</Link>
          <h1 className='links' id='title'>Wheel of Suck</h1>
          <Link to='/history' className='links' id='history'>History</Link> 
        </div>
    );
};

export default Navbar;