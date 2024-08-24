import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import i1 from "../../Assets/store.jpg";
import i2 from "../../Assets/inventory.webp";
import i3 from "../../Assets/vet.jpg";
import i4 from "../../Assets/trainer.webp";
import i5 from "../../Assets/groomer.jpg";
import i6 from "../../Assets/deliv.jpg";
import i7 from "../../Assets/main.jpg";
import i8 from "../../Assets/security.avif";
import i9 from "../../Assets/IT.jpg";

export default function Team() {
  const teamMembers = [
    { name: "Emilia Nevoresky", role: "Tracking Analyst", img: i1 },
    { name: "Michele Jenna", role: "Customer Service Representative", img: i7 },
    { name: "Henry Sunderland", role: "GPS Technician", img: i2 },
    { name: "John Tarlington", role: "Fleet Manager", img: i3 },
    { name: "Sarah Jaye", role: "Data Analyst", img: i4 },
    { name: "Christopher Bashaar", role: "Quality Assurance Specialist", img: i5 },
    { name: "Jamie Carter", role: "Logistics Coordinator", img: i6 },
    { name: "Temple Gilbert", role: "Delivery Driver Specialist", img: i6 },
    { name: "Samuel Hardy", role: "Maintenance And Hygiene", img: i4 },
    { name: "Mark Oakingsly", role: "Security Representative", img: i8 },
    { name: "Jim Ling-Hwei", role: "IT Personnel", img: i9 },
    { name: "Robert K.J", role: "Visual Merchandiser", img: i9 },
  ];

  return (
    <Styles>
      <Container>
        <Row>
          {teamMembers.map((member, index) => (
            <Col xl={3} sm={6} className="mb-5" key={index}>
              <div className="team-item bg-white rounded shadow-sm py-5 px-4 text-center">
                <img src={member.img} alt={member.name} className="cradle mb-3" />
                <h5 className="mb-0">{member.name}</h5>
                <span className="small text-uppercase text-muted">{member.role}</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  .cradle {
    width: 50%;
    height: 115px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .team-item {
    transition: transform 0.3s ease-in-out;
  }

  .team-item:hover {
    transform: translateY(-10px);
  }

  .social-link {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
  }

  .social-link:hover,
  .social-link:focus {
    background: #ddd;
    text-decoration: none;
    color: #555;
  }

  .mb-5 {
    margin-bottom: 3rem !important;
  }
`;

