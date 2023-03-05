import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import me from "@/Assets/me.jpg";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiRedux,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { srConfig } from "@/utils";

const softwareSkills = [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5",
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js",
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python",
  },
  {
    skillName: "C++",
    icon: <CgCPlusPlus />,
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react",
  },
  // {
  //   skillName: "redux",
  //   icon: <SiRedux />,
  // },
  {
    skillName: "next.js",
    icon: <SiNextdotjs />,
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node",
  },
  {
    skillName: "express.js",
    icon: <SiExpress />,
  },
  {
    skillName: "mongo db",
    icon: <SiMongodb />,
  },
  {
    skillName: "mysql",
    icon: <SiMysql />,
  },
  {
    skillName: "firebase",
    icon: <SiFirebase />,
  },

  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt",
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws",
  }, 
  {
    skillName: "linux",
    fontAwesomeClassname: "fab fa-linux",
  },
  // {
  //   skillName: "nginx",
  //   icon: <SiNginx />,
  // },
];
function About() {
  const revealSectionName = useRef(null);
  const revealContainer = useRef(null);
  const revealTech = useRef(null);

  useEffect(() => {
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealSectionName.current, srConfig());
        sr().reveal(revealContainer.current, srConfig());
        sr().reveal(revealTech.current, srConfig());
      }
    }
    animate();
  }, []);

  return (
    <Container className="home-about-section padding-container" id="about">
      <Container className="padding-container">
        <h2 ref={revealSectionName} className="mb-5 numbered-heading">
          About Me
        </h2>
        <Row ref={revealContainer} className="about-row">
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Hello! My name is Shahidul Islam Jahid and I am a seasoned web
              developer with a strong academic background and expertise in
              programming languages such as{" "}
              <span className="skill">
                C, C++, Java, Python, JavaScript, and C#{" "}
              </span>{" "}
              . My proficiency lies in full-stack web development and
              single-page web application frameworks such as{" "}
              <span className="skill">Next.js & Node.js!</span>. I have gained
              valuable insights into system design, team collaboration, and
              efficient coding practices through internships at{" "}
              <a href="https://ermg.co/" target="_blank">
                start-up
              </a>
              .I am passionate about contributing to the technology industry
              with my strong foundation in software engineering.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
            <div className="outer-wrapper">
              <div className="wrapper">
                <Image
                  className="img"
                  src={me}
                  height="auto"
                  width={500}
                  quality={95}
                  alt="Headshot"
                />
              </div>
            </div>
          </Col>
        </Row>
        <div ref={revealTech} className="software-skills-main-div">
          Here are a few professional skillsets I have:
          <ul className="dev-icons">
            {softwareSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  {skills?.fontAwesomeClassname ? (
                    <i className={skills.fontAwesomeClassname}></i>
                  ) : (
                    skills.icon
                  )}
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Container>
  );
}
export default About;
