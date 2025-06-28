import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavabar from '../AdminNavbar';

const Dashboard = () => {
  const [data, setData] = useState({
    products: 0,
    users: 0,
    orders: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, productsResponse, ordersResponse] = await Promise.all([
          axios.get('http://localhost:5100/users'),
          axios.get('http://localhost:5100/products'),
          axios.get('http://localhost:5100/orders'),
        ]);

        setData({
          users: usersResponse.data.length,
          products: productsResponse.data.length,
          orders: ordersResponse.data.length,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://thumbs.dreamstime.com/b/shopping-healthy-food-background-fresh-vegetables-meat-bread-fruits-paper-grocery-bag-delivery-cooking-ingredients-white-247162377.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
      }}
    >
      <AdminNavabar />
      <h1 className="text-center mb-4" style={{ color: '#134e4a', fontWeight: 'bold' }}>
        Dashboard
      </h1>

      <div className="dashboard container d-flex justify-content-center flex-wrap gap-4">

        {/* Product Count */}
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Product Count</Card.Title>
            <Card.Text>{data.products} Products</Card.Text>
            <Link to={'/admin/all-products'}>
              <Button variant="primary">View Products</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* User Count */}
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>User Count</Card.Title>
            <Card.Text>{data.users} Users</Card.Text>
            <Link to={'/admin/users'}>
              <Button variant="primary">View Users</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Order Count */}
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Order Count</Card.Title>
            <Card.Text>{data.orders} Orders</Card.Text>
            <Link to="/admin/orders">
              <Button variant="primary">View Orders</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Add Product */}
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Add Product</Card.Title>
            <Link to='/admin/add-product'>
              <Button style={{ width: '100px' }} variant="success">Add</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const cardStyle = {
  width: '250px',
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(6px)',
  borderRadius: '15px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
};

export default Dashboard;