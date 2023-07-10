import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png"
import logo1 from "../assets/images/logo1.png"

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"About Us"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling Opens The Door To Creating{" "}
                <span className="highlight">Memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tempus massa vitae elit consectetur, ut convallis
                massa ultricies. Duis hendrerit turpis quis tincidunt lobortis.
                Nullam vel faucibus mauris.
              </p>
            </div>
          </Col>
          <div className="about__image d-flex align-items-center">
    <img src={logo1} height={250} width={250} alt="" />
  </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
