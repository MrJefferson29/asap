import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const TrackingStatement = ({ story }) => {
  return (
    <Styles>
      <Container className="tracking-container">
        <Row className="tracking-header">
          <Col md="8">
            <p className="tracking-id">
              Tracking ID: <span className="tracking-id-value">{story.title}</span>
            </p>
          </Col>
          <Col md="4">
            <p className="package-status">
              Package Status: <span className="package-status-value">{story.content}</span>
            </p>
          </Col>
        </Row>
        <Row className="tracking-details">
          <p className="receiver-info">
            To be received by {story.receiver}, {story.insurrance}
          </p>
          <p className="transit-info">
            Began transit on <span className="transit-date">{story.depart}</span> and should be expected in <span className="expected-date">{story.expect}</span>
          </p>
          <Section title="Package Weight and Dimensions">
            <p className="weight">Weight: <span className="weight-value">{story.weight}</span></p>
            <p className="dimensions">Dimensions: Undefined</p>
          </Section>
          <Section title="Delivery Notes">
            <p>Please ensure someone is available to receive the package. If you have specific delivery preferences or instructions, contact our customer service.</p>
          </Section>
          <Section title="Proof of Delivery">
            <p>Upon delivery, the package will require a signature from the recipient. The proof of delivery with the recipient's name and signature will be available on our tracking portal.</p>
          </Section>
          <Section title="Exception Notifications">
            <p>In case of any delivery issues or exceptions, you will receive timely notifications. For further assistance, please contact our customer service.</p>
          </Section>
          <Section title="Insurance Information">
            <p>Your shipment fee is required on freight transit due to insurance. Conditions apply. For details, please refer to our insurance policy.</p>
          </Section>
          <Section title="Weather Conditions">
            <p>Please note that weather conditions may impact delivery schedules. We monitor weather updates to minimize any disruptions.</p>
          </Section>
          <Section title="Contact Information">
            <p>For assistance or inquiries, our customer support team can be reached at vishislogistics1968@gmail.com.</p>
            <p>Thank you for choosing Vishis Logistics. We appreciate your trust and look forward to delivering your package with care and efficiency. For real-time updates and additional information, visit our tracking portal at www.vishislogistics.com/tracking.</p>
          </Section>
        </Row>
      </Container>
    </Styles>
  );
};

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default TrackingStatement;

const Styles = styled.div`
  margin-top: 50px;
  font-family: 'Arial', sans-serif;
  
  .tracking-container {
    background-color: rgb(217, 219, 220);
    padding: 20px;
    border-radius: 8px;
  }
  
  .tracking-header {
    margin-bottom: 20px;
  }
  
  .tracking-id, .package-status {
    font-weight: 700;
    font-size: 1.3rem;
  }

  .tracking-id-value, .package-status-value, .transit-date, .expected-date, .weight-value {
    font-size: 1.5rem;
    font-weight: bolder;
  }
  
  .tracking-details {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .section {
    margin-bottom: 20px;
  }
  
  .section h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  .section p {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  @media only screen and (max-width: 768px) {
    .tracking-container {
      padding: 10px;
    }
  }
`;
