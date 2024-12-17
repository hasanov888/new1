import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Haqqında</Link>
        <Link to="/WorkExample">İş Nümunələri</Link>
        <Link to="/ContactInfo">Əlaqə Məlumatları</Link>
    </nav>
  );
};

export default Navbar;
