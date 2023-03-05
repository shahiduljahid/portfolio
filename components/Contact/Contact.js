import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig, email } from "@/utils";
import { Container } from "react-bootstrap";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 100px 0px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: var(--lightest-slate);
  }

  .email-link {
    margin-top: 50px;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealContainer.current, srConfig());
      }
    }
    animate();
  }, []);

  return (
    <Container>
      <StyledContactSection id="contact" ref={revealContainer}>
        <h2 className="numbered-heading overline">What’s Next?</h2>

        <h2 className="title">Get In Touch</h2>

        <p>
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have any queries or just want to say hi, I’ll try my best
          to get back to you!
        </p>

        <br />
        <br />
        <br />

        <a target="_blank" className="email-link" href={`mailto:${email}`}>
          Say Hello
        </a>
      </StyledContactSection>
    </Container>
  );
};

export default Contact;
