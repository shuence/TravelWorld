import React from 'react'
import "../styles/Home.css"
import {Container,Row, Col} from 'reactstrap'
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg2 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import Subtitle from '../Shared/Subtitle'
import worldImg from "../assets/images/world.png"
import experienceImage from "../assets/images/experience.png"
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../Services/ServiceList'
import FeaturedToursList from '../FeaturedTours/FeaturedToursList'
import MasonryImagesGallery from '../Component/Image-gallery/MasonryImagesGallery'
import Testimonials from '../Component/Testimonials/Testimonials'
import Newsletter from '../Shared/Newsletter'

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling Opens The Door To Creating{" "}
                <span className="highlight">Memories</span>
              </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies.
              Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris. 
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" autoPlay controls loop muted />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h5 className="services__subtitle">What We Serve</h5>
            <h2 className="services__title">We Offer Our Best Services</h2>
          </Col>
          </Row>
          <ServiceList/>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedToursList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              <h2>Will our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br />
                 Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
              </p>
            </div>

            <div className="couter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15+</span>
                <h6>Years Experience</h6>
              </div>
            </div>

          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title">
              Visit Our Customers Tour Gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Testimonial"}/>
            <h2 className="testmonials__title">What our Customers Say about us</h2>
          </Col>
          <Testimonials/>
        </Row>
      </Container>
    </section>
    <Newsletter/>

    </>
  )
}

export default Home