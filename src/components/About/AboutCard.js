import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Minilan</span>
            <br />
            I’m currently a developer and student passionate about software and web technologies.
            <br />
            I’m based in <span className="purple">France</span>
            <br />
            <br />
            Beyond coding, here are some things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech and programming languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about AI 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I’m too lazy to be lazy, so I just do it."
          </p>
          <footer className="blockquote-footer">Minilan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
