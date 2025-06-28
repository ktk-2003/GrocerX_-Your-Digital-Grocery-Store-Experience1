import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f7f7f7;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer>
            <div className='container shadow p-4'>
                <Heading>About Us</Heading>
                <Paragraph>
                   At GrocerX, we’re committed to bringing you the freshest groceries and everyday essentials, all in one place — to make shopping easy and delightful.


                </Paragraph>
                <Paragraph>
                    Since 2005, our mission has been simple: to serve every household with fresh produce, essential pantry items, and unmatched quality. Every item we offer is carefully selected to meet the highest standards and earn your trust.
                </Paragraph>
                <Paragraph>
                   From daily essentials to specialty items, we offer everything you need — when you need it. Let GrocerX bring the joy of premium groceries straight to your home
                </Paragraph>
            </div>
        </AboutContainer>
    );
};

export default About;
