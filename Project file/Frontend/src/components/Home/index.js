import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../Contact';
import Header from '../Header';

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("https://th.bing.com/th/id/R.3934502e25e60bfaa32a632e53cd017e?rik=8BR2jeC83IMyog&riu=http%3a%2f%2fbigbasketclone.yolasite.com%2fresources%2fgrocery+online+shopping.jpg&ehk=PlKKfByLErmpMdrsZdrhG9ncuXLXfdsMdKfzByVLyGk%3d&risl=&pid=ImgRaw&r=0")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)', // Increased transparency
            padding: '2rem',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)', // Optional: adds a modern glassmorphism effect
          }}
        >
          <h1 style={{ fontSize: '3rem', color: '#3B82F6', fontWeight: '700' }}>
            Welcome to <span style={{ color: '#10B981' }}>GrocerX</span>
          </h1>
          <p style={{ fontSize: '1.2rem', margin: '1rem 0', color: '#333' }}>
            Making grocery shopping simple, fresh, and fast with the best online experience.
          </p>
          <Link to="/shopping" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#EF4444',
                color: 'white',
                fontWeight: '600',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;