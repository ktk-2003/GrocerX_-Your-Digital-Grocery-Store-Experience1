import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #fff;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <div className='container shadow p-4'>
      <Heading>Contact Us</Heading>
      <ContactInfo>
        <p>
          We truly appreciate your interest in GrocerX! Have questions or need support? Don’t hesitate to contact us — we’re happy to assist
        </p>
        <p>
          <strong>Email:</strong> Kalapalalakshmi183@gmail.com,
           Jyothikakadavakollu01@gmail.com ,
           Harshavardhankokkiripati@gmail.com ,
           Kjlvardhani999@gmail.com.
        </p>
        <p>
          <strong>Phone:</strong> 7779996661,
          999998888,
          8887776666,
          9998887777.
        </p>
      </ContactInfo>
      </div>
    </ContactContainer>
  );
};

export default ContactUs;
