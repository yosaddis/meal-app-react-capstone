import React from 'react';
import { Outlet } from 'react-router-dom';
import ListDishes from './ListDishes';

const Layout = () => (
  <div className="wrapper" data-testid="layout">
    <ListDishes data-testid="navbar" />
    <Outlet />
  </div>
);

export default Layout;
