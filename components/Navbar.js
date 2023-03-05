import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function NavBar() {
  const [isMounted, setIsMounted] = useState(false);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 50);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  typeof window !== "undefined" &&
    window.addEventListener("scroll", scrollHandler);

  const logoRef = useRef(null);
  const resumeRef = useRef(null);

  const navLinks = [
    {
      component: (
        <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
          <span className="number">01.</span> About
        </Nav.Link>
      ),
      nodeRef: useRef(null),
    },
    {
      component: (
        <Nav.Link href="#work" onClick={() => updateExpanded(false)}>
          <span className="number">02.</span> Experience
        </Nav.Link>
      ),
      nodeRef: useRef(null),
    },
    {
      component: (
        <Nav.Link href="#projects" onClick={() => updateExpanded(false)}>
          <span className="number">03.</span> Project
        </Nav.Link>
      ),
      nodeRef: useRef(null),
    },
    {
      component: (
        <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
          <span className="number">04.</span> Contact
        </Nav.Link>
      ),
      nodeRef: useRef(null),
    },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"}`}
    >
      <Container fluid>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition nodeRef={logoRef} classNames="fade" timeout={2000}>
              <Nav.Link
                // style={{ transitionDelay: `1500ms` }}
                ref={logoRef}
                href="#home"
              >
                <Navbar.Brand className="d-flex">
                  <Image height={60} width="auto" alt="Logo" src={logo} />
                </Navbar.Brand>
              </Nav.Link>
            </CSSTransition>
          )}
        </TransitionGroup>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ component, nodeRef }, i) => (
                  <CSSTransition
                    key={i}
                    nodeRef={nodeRef}
                    classNames="fadedown"
                    timeout={2000}
                  >
                    <Nav.Item
                      style={{ transitionDelay: `${i * 100}ms` }}
                      ref={nodeRef}
                    >
                      {component}
                    </Nav.Item>
                  </CSSTransition>
                ))}
            </TransitionGroup>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition
                  nodeRef={resumeRef}
                  classNames="fade"
                  timeout={2000}
                >
                  <Nav.Item
                    ref={resumeRef}
                    style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Nav.Link
                      // as={Link}
                      target="_blank"
                      href="https://drive.google.com/file/d/1WOg4DovR60RMKcoI_wOQ_87EJ0WZ08yD/view"
                      className="resume-button"
                    >
                      Resume
                    </Nav.Link>
                  </Nav.Item>
                </CSSTransition>
              )}
            </TransitionGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
