import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Homies🙌, I am <span className="purple">Harish Kannan </span>
            from <span className="purple"> Coimbatore,Tamil Nadu India.</span>
            <br />
            I have recently completed my B.Tech in Information Technology from<br /> Park College of Engineering and Technology.
            <br />
            I am  passionate about software development, IoT systems, and building real-time web applications.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by curiosity,grounded by purpose"{" "}
          </p>
          <footer className="blockquote-footer">`harisheyyyy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
