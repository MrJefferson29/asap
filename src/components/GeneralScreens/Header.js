import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Header.css";
import { FaUserEdit, FaBars } from "react-icons/fa";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" sticky="top">
        <Container sticky="top">
          <Navbar.Brand href="/">
            <div className="brand">
              <span>V</span>ishis..
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FaBars style={{ color: "aliceblue" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/" className="nav-link">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/tracking" className="nav-link">
                TRACK
              </Nav.Link>
              {auth && (
                <Nav.Link as={Link} to="/create-post" className="nav-link">
                  NEW PACKAGE
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/about" className="nav-link">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/meet-the-team" className="nav-link">
                TEAM
              </Nav.Link>
              {auth && (
                <NavDropdown title="Profile" id="collasible-nav-dropdown" className="nav-link-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">
                    <FaUserEdit /> Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      localStorage.removeItem("authToken");
                      setAuth(false);
                      navigate("/");
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  .navy {
    background-color: #0a1d37;
    padding: 0.5rem 1rem;
  }

  .brand {
    font-family: 'Ginger', sans-serif;
    color: burlywood;
    font-size: 2rem;
    font-weight: 700;

    span {
      font-size: 2.4rem;
      color: lightcoral;
    }
  }

  .nav-link {
    font-size: 1.2rem;
    font-weight: 600;
    color: aliceblue !important;
    margin-left: 25px;
    transition: color 0.3s ease;

    &:hover {
      color: lightcoral !important;
    }
  }

  .nav-link-dropdown {
    font-size: 1.2rem;
    font-weight: 600;
    color: aliceblue !important;
    margin-left: 25px;

    .dropdown-toggle::after {
      color: aliceblue;
    }

    .dropdown-menu {
      background-color: #0a1d37;
      border: none;

      .dropdown-item {
        color: aliceblue;

        &:hover {
          background-color: lightcoral;
          color: white;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .nav-link {
      margin-left: 0;
      padding: 0.5rem 0;
    }

    .nav-link-dropdown {
      margin-left: 0;
      padding: 0.5rem 0;
    }

    .navbar-collapse {
      background-color: #0a1d37;
      padding: 1rem;
    }

    .brand {
      font-size: 1.6rem;

      span {
        font-size: 2rem;
      }
    }
  }
`;
