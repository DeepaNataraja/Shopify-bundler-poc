import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h3 className='logo'></h3>
      <ul className='nav-links'>
        <li>
          <Link to='/' className='home'>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to='/products' className='products'>
            <FontAwesomeIcon icon={faEye} />
            <span>View Products</span>
          </Link>
        </li>
        <li>
          <Link to='/createbundle' className='createbundle'>
            <FontAwesomeIcon icon={faPlus} />
            <span>Create Bundles</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
