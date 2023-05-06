import React from 'react';
import { NavLink } from 'react-router-dom';

const ListDishes = () => {
  const links = [];
  return (
    <div className="heading" data-testid="listDishes">
      <h1 className="me-3">Vegetarian Recipies</h1>
      <ul className="list-group list-group-horizontal">
        {links.map((link) => (
          <li className="list-group-item" key={link.text}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDishes;
