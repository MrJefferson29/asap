import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Sc2 from "./Sc2";
import i2 from "../../Assets/m2.jpeg";
import g6 from "../../Assets/m1.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Styles>
      <Container>
        <Row className="about-section">
          <Col md="6" className="image-col">
            <img src={g6} alt="Vishis Vision" className="about-image" />
          </Col>
          <Col md="6" className="text-col">
            <p className="about-text">
              Embarking on this journey with a vision to redefine delivery
              tracking, Vishis was born out of the desire to simplify and
              enhance the way we monitor and receive our packages. Established
              by a team of dedicated professionals, we're driven by a shared
              commitment to technological innovation, logistical excellence, and
              unparalleled customer service.
            </p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col md="6" className="text-col">
            <p className="about-text">
              At Vishis, we are not just a tracking platform; we are your
              partners in the delivery experience. Our mission is to empower you
              with a tool that doesn’t just show you the route your package
              takes but enriches your overall journey. We want to be the reason
              you smile when your parcel arrives – timely and intact.
            </p>
          </Col>
          <Col md="6" className="image-col">
            <img src={i2} alt="Vishis Mission" className="about-image" />
          </Col>
        </Row>
      </Container>

      <Row className="cta-section">
        <div className="cta-content">
          <p>
            Become a part of the Vishis community – a place where tracking
            becomes an experience, and deliveries become celebrations. Whether
            you're a business optimizing your logistics or an individual eagerly
            awaiting a special package, we invite you to join us on this
            exciting journey. Thank you for choosing Vishis – where every
            delivery is a story waiting to be told!
          </p>
          <Link to="/adopt-shelter">
            <button className="cta-button">Visit Shelter</button>
          </Link>
        </div>
      </Row>

      <Sc2 />
    </Styles>
  );
}

const Styles = styled.div`
  overflow-x: hidden;
  padding: 20px 0;

  .about-section {
    margin-bottom: 40px;
  }

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-image {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .text-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-text {
    padding: 20px;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: "Gaqire", sans-serif;
    line-height: 1.6;
  }

  .cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 60vh;
    background-color: #000;
    color: #f0f0f0;
    padding: 40px 20px;
  }

  .cta-content {
    max-width: 700px;
  }

  .cta-button {
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background: burlywood;
    font-size: 1.2rem;
    font-weight: 600;
    color: aliceblue;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #d3a17e;
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 767px) {
    .about-text {
      font-size: 1.2rem;
    }

    .about-image {
      max-width: 100%;
      height: auto;
    }

    .cta-section {
      padding: 20px 10px;
    }

    .cta-button {
      width: 180px;
      height: 50px;
    }
  }
`;
