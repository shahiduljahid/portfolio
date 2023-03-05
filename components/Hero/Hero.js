import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";
import React, { createRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import homeLogo from "../../Assets/hero_img8.gif";
import Particle from "../Particle";
import Type from "./Type";

function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h5 className="heading">Hi,&nbsp;my name is</h5>;
  const two = (
    <h1 className="heading-name">
      <div className="main-name">Shahidul Islam Jahid</div>
      <Type />
    </h1>
  );
  const three = <h1 className="heading-sub">I build things for the web.</h1>;
  const four = (
    <div className="heading-description" style={{ textAlign: "left" }}>
      As a proficient MERN stack developer, I possess extensive experience in
      developing robust web applications utilizing contemporary{" "}
      <span className="skill">Javascript </span> libraries and frameworks
      including like
      <span className="skill"> React.js </span>,{" "}
      <span className="skill">Next.js</span> and{" "}
      <span className="skill">Node.js</span>. My unwavering commitment to
      excellence is evident in my focus on advancing my software engineering
      skills to keep pace with industry advancements and standards.
    </div>
  );

  // const list = [one, two, three, four];
  const items = [
    {
      component: one,
      nodeRef: createRef(null),
    },
    {
      component: two,
      nodeRef: createRef(null),
    },
    {
      component: three,
      nodeRef: createRef(null),
    },
    {
      component: four,
      nodeRef: createRef(null),
    },
  ];
  const imgRef = createRef(null);

  return (
    <>
      <Container
        style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
        fluid
        className="home-section"
        id="home"
      >
        <Particle />
        <Container className="home-content padding-container">
          <Row>
            <Col md={8} className="home-header">
              <TransitionGroup component={null}>
                {isMounted &&
                  items.map(({ component, nodeRef }, i) => (
                    <CSSTransition
                      key={i}
                      nodeRef={nodeRef}
                      classNames="fadeup"
                      timeout={2000}
                    >
                      <div
                        ref={nodeRef}
                        style={{ transitionDelay: `${i + 1}00ms` }}
                      >
                        {component}
                      </div>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition
                    nodeRef={imgRef}
                    classNames="fadeup"
                    timeout={2000}
                  >
                    <Image
                      src={homeLogo}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "450px", transitionDelay: `100ms` }}
                      ref={imgRef}
                    />
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Hero;
