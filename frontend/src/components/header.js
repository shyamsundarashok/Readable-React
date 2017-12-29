import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header heading'>
    <Link to='/'>
      <h1>READABLE</h1>
    </Link>
  </div>
);

export default Header;