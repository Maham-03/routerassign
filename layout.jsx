import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import './layout.css';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
