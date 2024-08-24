import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBone, faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import Sc2 from "./Sc2";
import TestimonialSlider from './Testimonials';

// Image imports
import i1 from "../../Assets/g1.jpg";
import g1 from "../../Assets/g2.jpeg";
import g2 from "../../Assets/i1.jpeg";
import j1 from "../../Assets/j1.jpeg";
import j2 from "../../Assets/j2.jpeg";

const IconRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 50px;
  background: aliceblue;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: burlywood;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
`;

const Sc1 = () => {
  return (
    <Styles>
      <Container>
        <Row className="hero-section">
          <Col md={5} className="text-section">
            <h1 className="title">VISHIS..</h1>
            <p className="description">
              At Vishis, we understand that every journey is a story waiting to be told.
              We bring you cutting-edge tracking solutions to elevate your experience,
              ensuring safety, efficiency, and peace of mind every step of the way.
            </p>
          </Col>
          <Col md={7}>
            <img src={i1} alt="Vishis" className="main-image" />
          </Col>
        </Row>

        <Row className="features-section">
          {featuresData.map((feature, index) => (
            <Col md={6} key={index} className="feature-block">
              <div className="feature">
                <div className="feature-number">{feature.number}</div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="image-gallery">
          <Col md={6}>
            {/* <img src={g1} alt="Gallery 1" className="gallery-image" /> */}
            <img src={g2} alt="Gallery 2" className="gallery-image" />
          </Col>
          <Col md={6}>
            <img src={j1} alt="Gallery 3" className="gallery-image" />
            {/* <img src={j2} alt="Gallery 4" className="gallery-image" /> */}
          </Col>
        </Row>

        <SectionTitle>Our Services</SectionTitle>
        <IconRow>
          <IconWrapper>
            <FontAwesomeIcon icon={faBox} />
          </IconWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faBone} />
          </IconWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faBoxesPacking} />
          </IconWrapper>
        </IconRow>

        <Sc2 />

        <SectionTitle>What our clients say about us</SectionTitle>
        <TestimonialSlider />
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  overflow-x: hidden;
  margin-top: 30px;

  .hero-section {
    margin-bottom: 50px;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-size: 3rem;
    font-family: 'Arial, sans-serif';
    color: burlywood;
  }

  .description {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 20px;
  }

  .main-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .features-section {
    margin-bottom: 50px;
  }

  .feature-block {
    margin-bottom: 30px;
  }

  .feature {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }

  .feature-number {
    font-size: 3rem;
    font-weight: bold;
    color: burlywood;
  }

  .feature-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: burlywood;
  }

  .feature-description {
    font-size: 1rem;
    color: #333;
  }

  .image-gallery {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }

  .gallery-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    .text-section {
      text-align: center;
    }

    .hero-section {
      flex-direction: column-reverse;
    }

    .features-section {
      text-align: center;
    }

    .feature {
      flex-direction: column;
    }

    .image-gallery {
      flex-direction: column;
    }
  }
`;

const featuresData = [
  {
    number: "01",
    title: "Real-Time Precision",
    description:
      "Experience a new level of precision with our state-of-the-art tracking technology. Stay connected to your assets, loved ones, or shipments with real-time updates that put you in control.",
  },
  {
    number: "02",
    title: "Versatile Tracking Solutions",
    description:
      "From personal tracking devices to advanced fleet management systems, we offer a diverse range of solutions tailored to your unique needs. No matter the scale, we have you covered.",
  },
  {
    number: "03",
    title: "Peace of Mind, Anytime, Anywhere",
    description:
      "Our commitment to your peace of mind goes beyond borders. Track and monitor from the palm of your hand with our user-friendly mobile app, ensuring you're in control wherever life takes you.",
  },
  {
    number: "04",
    title: "Cutting-Edge Security Features",
    description:
      "Security is at the heart of what we do. Benefit from our advanced security features, including geofencing, tamper alerts, and emergency response protocols, providing an extra layer of protection.",
  },
];

export default Sc1;
