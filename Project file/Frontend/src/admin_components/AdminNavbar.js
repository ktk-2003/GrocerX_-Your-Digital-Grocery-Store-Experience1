// src/components/Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

const Unavbar = () => {
  const get = localStorage.getItem('user');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#c6e25f',
        padding: '0.8rem 1rem',
        margin: 0,               // ensures no top spacing
        position: 'relative',    // needed for dropdown positioning
        zIndex: 999
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link
            to="/uhome"
            style={{
              color: "#134e4a", // dark green
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            GrocerX Web
          </Link>
        </Navbar.Brand>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Nav className="me-auto d-none d-lg-flex">
            <Link to="/admin/all-products" style={navLinkStyle}>Products</Link>
            <Link to="/admin/add-product" style={navLinkStyle}>Add Product</Link>
            <Link to="/admin/orders" style={navLinkStyle}>Orders</Link>
          </Nav>

          <FaBars
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#134e4a", fontSize: "24px", cursor: "pointer", marginLeft: '1rem' }}
          />
        </div>
      </Container>

      {menuOpen && (
        <div style={dropdownMenu}>
          <Link to="/admin/dashboard" style={dropdownLink}>Dashboard</Link>
          <Link to="/admin/users" style={dropdownLink}>Users</Link>
          <Link to="/" style={dropdownLink}>Logout</Link>
        </div>
      )}
    </Navbar>
  );
};

const navLinkStyle = {
  padding: "8px",
  color: "#134e4a", // dark green
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

const dropdownMenu = {
  position: 'absolute',
  top: '60px',
  right: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  borderRadius: '10px',
  padding: '1rem',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const dropdownLink = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Unavbar;