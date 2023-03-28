import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
      <nav>
        <Link to="/details">Details</Link>
        <Link to="/">List</Link>
      </nav>
    </Header>
  )
}

export default Header;