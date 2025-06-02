import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import map from "../../Assets/Projects/map.png";
import ltc from "../../Assets/Projects/ltc.png";
import kira from "../../Assets/Projects/kira.png";
import minilan from "../../Assets/Projects/minilan.png";
import ltc2 from "../../Assets/Projects/ltc2.png";

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
              imgPath={map}
              isBlog={false}
              title="Interactive Map"
              description="A web application that displays user locations on an interactive map with real-time updates. Built with React, Leaflet, and Node.js, featuring user authentication and data storage on a custom backend"
              ghLink="https://github.com/Minilan69/Olive-Discord-Map"
              demoLink="https://maman-olive.minilan.fr/map"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minilan}
              isBlog={false}
              title="Minilan's Website"
              description="Personal website showcasing my projects, skills, and portfolio. Built with React and styled for a clean, modern look"
              ghLink="https://github.com/Minilan69/Minilan-Website"
              demoLink="https://minilan.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ltc2}
              isBlog={false}
              title="Djidjeyland's Website"
              description="Showcase website for the Djidjeyland Discord server, featuring community info, events, and servers"
              ghLink="https://github.com/Minilan69/DjidjieyLand"
              demoLink="https://minilan69.github.io/DjidjieyLand/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ltc}
              isBlog={false}
              title="Djidjeyland's Bot"
              description="Discord bot featuring an economy system and moderation tools to manage and engage the community effectively"
              ghLink="https://github.com/Minilan69/DjidjeyLand-Discord-Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kira}
              isBlog={false}
              title="Kira Bot"
              description="Discord bot featuring a mini-game where players can kill each othe to earn apples"
              ghLink="https://github.com/Minilan69/Kira-Bot"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
