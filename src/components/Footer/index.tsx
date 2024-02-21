import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end margin-top">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/miryan-orellana/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/devParadise98" target="_blank"><img src={navIcon3} alt="github" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;