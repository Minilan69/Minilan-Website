import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      
      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}


export default Techstack;
