import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particles";
import runBuddy from "../../assets/projects/hero-bg.jpg";
import wonderDestination from "../../assets/projects/Wonder Destinations.png";
import smartBook from "../../assets/projects/Home_page.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runBuddy}
              title="RunBuddy"
              description="workout tracker application"
              ghLink="https://github.com/nkirti28/run-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wonderDestination}
              title="Wonder Destinations"
              description="Travel guide application"
              ghLink="https://github.com/nkirti28/wonder-destinations"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartBook}
              title="Smart Book"
              description="Online Book store application"
              ghLink="https://github.com/nkirti28/smart-book"
              demoLink="https://smartest-book.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
