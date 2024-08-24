import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import g3 from "../../Assets/s1.jpeg";
import g4 from "../../Assets/s3.jpeg";
import g5 from "../../Assets/k2.jpeg";

export default function Sc2() {
  return (
    <Styles>
      <Container>
        <Row className="mt-5">
          <Col md="4">
            <SectionTitle>Customer-Centric Approach</SectionTitle>
            <StyledImage src={g3} alt="Customer-Centric Approach" />
            <SectionText>
              Your satisfaction is our priority. Our dedicated support team is
              here 24/7 to assist you with any inquiries, ensuring you get the
              most out of our tracking solutions.
            </SectionText>
          </Col>

          <Col md="4">
            <SectionTitle>Innovation for Tomorrow</SectionTitle>
            <StyledImage src={g5} alt="Innovation for Tomorrow" />
            <SectionText>
              Embrace the future with Vishis. We're committed to staying ahead
              of the curve, continuously innovating to bring you the latest
              advancements in tracking technology.
            </SectionText>
          </Col>

          <Col md="4">
            <SectionTitle>Global Reach, Local Touch</SectionTitle>
            <StyledImage src={g4} alt="Global Reach, Local Touch" small />
            <SectionText>
              With a global reach and a local touch, we provide reliable
              tracking solutions tailored to your specific region or industry
              requirements.
            </SectionText>
          </Col>
        </Row>

        <Row className="py-5 text-center">
          <Col md={{ span: 8, offset: 2 }}>
            <JourneyTitle>Join Us on Your Journey</JourneyTitle>
            <SectionText>
              Ready to embark on a journey of unparalleled tracking and
              security? Explore our range of tracking solutions and discover the
              power of being in control. Your story is unique; let us help you
              tell it with precision, security, and confidence.
            </SectionText>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 15vh;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const SectionTitle = styled.h2`
  font-family: "Gaqire", serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: ${(props) => (props.small ? "20px" : "0")};
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 20px;
`;

const JourneyTitle = styled.h2`
  font-family: "Ginger", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
`;
