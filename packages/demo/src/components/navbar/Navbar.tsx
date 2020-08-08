import * as React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/buttons/">Buttons</Link>
      </li>
      <li>
        <Link to="/cards/">Cards</Link>
      </li>
      <li>
        <Link to="/grids/">Grids</Link>
      </li>
    </ul>
  );
};
