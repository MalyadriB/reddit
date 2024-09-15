import React from 'react';
import './Navbar.css';
import logo from './assets/Reddit_Lockup_3x-19c80010-89b1-4474-b437-a33e29130a9f.png';
// import { FaSearch } from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search Reddit" className="search-bar" />
        </div>
      </div>
      <div className="navbar-right">
        <button className="scanner-button">
          <QrCodeScannerIcon className="scanner-icon" />
          Get app
        </button>
        </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
      </div>
      <div className="navbar-right">
        <MoreHorizIcon/>
      </div>
    </nav>
  );
};

export default Navbar;
