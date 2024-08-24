import React from "react";
import styled from "styled-components";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faPhone, faMapMarkerAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import "../../Css/Footer.css";

const Footer = () => {
  return (
    <Styles>
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faTruck} />
            </div>
          </Col>
          <Col md={9}>
            <div className="footer-brand">
              <span className="brand-name"> Vishis Logistics</span>
            </div>
          </Col>
        </Row>
        <Row className="footer-details">
          <Col md={3}>
            <div className="footer-section">
              <FontAwesomeIcon icon={faClock} className="footer-icon" />
              <p className="footer-title">Business Hours</p>
              <p className="footer-text">Mon – Sat 8am to 6pm</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <p className="footer-title">Send Us Email</p>
              <NavLink to="mailto:vishislogistics.1968@gmail.com" className="footer-link">
              vishislogistics.1968@gmail.com
              </NavLink>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <p className="footer-title">Call Us</p>
              <NavLink to="tel:+1234567890" className="footer-link">
                +1 (234) 567-890
              </NavLink>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              <p className="footer-title">Visit Us</p>
              <p className="footer-text">123 Logistics Lane, Delivery City, DC</p>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={12} className="text-center">
            <p>Copyright © 2024 Vishis Logistics. All Rights Reserved</p>
            <NavLink to="#" className="footer-bottom-link">
              Terms & Conditions
            </NavLink>
            <NavLink to="#" className="footer-bottom-link">
              Careers
            </NavLink>
            <NavLink to="#" className="footer-bottom-link">
              Get A Quote
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;

const Styles = styled.footer`
  background: #0b0b0b;
  color: white;
  padding: 60px 0;

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    border-bottom: 1px solid burlywood;
    margin-bottom: 30px;
  }

  .icon-wrapper {
    font-size: 56px;
    color: burlywood;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand-name {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 4px;
    color: burlywood;
  }

  .footer-details {
    text-align: center;
    margin-top: 30px;
  }

  .footer-section {
    margin-bottom: 20px;
  }

  .footer-title {
    font-size: 1.8rem;
    font-weight: 300;
    color: burlywood;
    margin-top: 10px;
  }

  .footer-text {
    font-size: 1.1rem;
    color: #CCCCCC;
    margin-bottom: 10px;
  }

  .footer-icon {
    font-size: 1.8rem;
    color: burlywood;
  }

  .footer-link {
    font-size: 1.1rem;
    color: burlywood;
    display: block;
    margin-bottom: 10px;
    border-bottom: 2px solid burlywood;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-bottom: 2px;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }

  .footer-bottom {
    margin-top: 30px;
  }

  .footer-bottom-link {
    font-size: 1rem;
    color: burlywood;
    margin: 0 10px;
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      border-bottom: 1px solid burlywood;
    }
  }
`;
