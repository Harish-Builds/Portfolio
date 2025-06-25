import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Personal AI Career Mentor"
              description="AI Career Mentor built using Python, Flask, MySQL, and Bootstrap. Offers personalized career suggestions using decision trees with real-time recommendations for courses, colleges, and skill development through explainable AI models."
              ghLink="https://github.com/Harish-Builds/Career_Genie"
              demoLink="https://career-genie-fawn.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dynamic Web Application"
              description="Built the front-end user interface to display sales, services, and employee 
                            details for Skill-Tech Electronics, a renowned global manufacturer of variable frequency drives, servo 
                            systems,  known for outstanding quality and reliability in 
                            both standard and custom solutions."
              ghLink="https://github.com/Harish-Builds/app_tech_feed  "
              demoLink="https://app-tech-feed.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Keeper App"
              description="Keeper App built using React.js. A simple and intuitive note-taking app that allows users to add, view, and delete notes instantly. Notes are auto-saved using local storage, ensuring persistence even after reloads. Minimalist UI inspired by Google Keep."
              ghLink="https://github.com/Harish-Builds/keeper-app"
              demoLink="keeper-app-woad-psi.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Password Manager"
              description="A simple yet secure desktop application built with Python and Tkinter that allows users to store, generate, and manage passwords for different websites and services. The app provides a user-friendly GUI, auto password generation, and secure local storage with basic encryption."
              ghLink="hhttps://github.com/Harish-Builds/Password_Manager"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Beware-SOS"
              description="Beware-SOS is a women safety web app inspired by Kavalan, developed using HTML, CSS, and JavaScript. It features a pre-SOS alert mechanism for quick response in emergencies, helping users send location and alerts before danger escalates."
              ghLink="https://github.com/Harish-Builds/Beware-SOS"
              demoLink="https://beware-sos.netlify.app/home.html" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Drowsiness Detection"
              description="TTo monitor a user's eye state in real-time and detect signs of drowsiness using computer vision techniques. If the system detects prolonged eye closure, it triggers an alert to prevent accidents—especially useful in automotive or workplace safety scenarios."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
