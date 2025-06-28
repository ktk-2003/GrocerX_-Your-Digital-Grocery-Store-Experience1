import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.getItem("jwtToken");
  const adminToken = localStorage.getItem("adminJwtToken");

  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(!!adminToken);
  }, [adminToken]);

  const onLogout = () => {
    const res = window.confirm("Are you sure you want to log out?");
    if (res) {
      localStorage.clear();
      Cookies.removeItem('jwtToken');
      navigate('/login');
    }
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#A7C957', // Olive green
        padding: '0.75rem 2rem',
        minHeight: '64px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
      }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontSize: '34px',
            fontWeight: 'bold',
            color: '#3F1D00', // Dark brown for GrocerX
            letterSpacing: '1px',
            fontFamily: 'Segoe UI, sans-serif'
          }}
        >
          GrocerX
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-4 align-items-center">
            <NavLink to="/" className="text-dark text-decoration-none fw-semibold">Home</NavLink>
            <NavLink to="/my-cart" className="text-dark text-decoration-none fw-semibold">MyCart</NavLink>
            <NavLink to="/my-orders" className="text-dark text-decoration-none fw-semibold">Orders</NavLink>
            <NavLink to="/my-history" className="text-dark text-decoration-none fw-semibold">History</NavLink>

            {!token && !isAdmin ? (
              <NavDropdown title={<span className="text-dark fw-semibold">Login</span>} id="login-dropdown">
                <NavDropdown.Item href="/login">User Login</NavDropdown.Item>
                <NavDropdown.Item href="/alogin">Admin Login</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavLink to="/login" className="text-dark text-decoration-none fw-semibold" onClick={onLogout}>
                Logout
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;