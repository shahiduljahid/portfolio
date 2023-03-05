import Esports_Ground from "@/Assets/Projects/es.png";
import Moments from "@/Assets/Projects/moment.png";
import bookShop from "@/Assets/Projects/bookShop.png";
import { srConfig } from "@/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const featuredProjects = [
  {
    external: "https://esports-ground.vercel.app/",
    title: "ESPORTS GROUND",
    tech: ["Next.js", "express.js", "Material UI", "Mongo DB", "PdfLib"],
    githubFront: "https://github.com/shahiduljahid/Esports-Management",
    githubBack: "https://github.com/shahiduljahid/esports-management-server",
    cover: Esports_Ground,
    description:
      "Esports management software is designed to help esports organizations and teams manage their operations more efficiently. It offers features such as tournament creation, generate overall standings what automated sorted , serve banner and certificate templates for teams and player. It also provides an easy-to-use interface for managing schedules, and events.",
  },
  {
    external: "https://your--moments.web.app/",
    title: "MOMENTS",
    tech: ["React", "express.js", "Firebase", "Mongo DB", "Stripe"],
    githubFront: "https://github.com/shahiduljahid/Moments",
    githubBack: "https://github.com/shahiduljahid/wedding-photographer-server",
    cover: Moments,
    description:
      "It's a Wedding Photography Agency’s Website where authenticated users can buy services and check their service status. On the Admin dashboard admin can add/delete/update any services and change order status",
  },
  {
    external: "https://bookshop-9dab3.web.app/",
    title: "Book Shop",
    tech: ["JavaScript", "React", "Node.js", "Firebase", "Mongo DB"],
    githubFront: "https://github.com/shahiduljahid/bookshopclient",
    githubBack: "https://github.com/shahiduljahid/bookshopserver",
    cover: bookShop,
    description:
      "Book Shop is a online Book shop where user can order their desired product, check order status",
  },
];

function Projects() {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    async function animate() {
      if (revealTitle.current && revealProjects.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealTitle.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr().reveal(ref, srConfig(i * 100))
        );
      }
    }
    animate();
  }, []);

  return (
    <Container className="padding-container" id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>
      <Row>
        <ul className="project-grid">
          {featuredProjects &&
            featuredProjects.map(
              (
                {
                  external,
                  title,
                  tech,
                  githubFront,
                  githubBack,
                  cover,
                  description,
                },
                i
              ) => {
                return (
                  <li
                    className="project"
                    key={i}
                    ref={(el) => (revealProjects.current[i] = el)}
                  >
                    <div className="project-content">
                      <div>
                        <p className="project-overline">Featured Project</p>

                        <h3 className="project-title">
                          <a target="_blank" href={external}>{title}</a>
                        </h3>

                        <div className="project-description">{description}</div>

                        {tech.length && (
                          <ul className="project-tech-list">
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </ul>
                        )}

                        <div className="project-links">
                          {githubFront && (
                            <a target="_blank"
                              href={githubFront}
                              aria-label="GitHub Frontend Link"
                            >
                              <FiGithub />
                              Front End
                            </a>
                          )}
                          {githubBack && (
                            <a target="_blank"
                              href={githubBack}
                              aria-label="GitHub Backend Link"
                            >
                              <FiGithub />
                              Back End
                            </a>
                          )}
                          {external && (
                            <a target="_blank"
                              href={external}
                              aria-label="External Link"
                              className="external"
                            >
                              <FiExternalLink />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="project-image">
                      <a target="_blank" href={external}>
                        <Image
                          src={cover}
                          height="auto"
                          width="auto"
                          alt={title}
                          className="img"
                          placeholder="blur"
                        />
                      </a>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </Row>
    </Container>
  );
}

export default Projects;
