import React from 'react'
import ServiceCard from './ServiceCard'
import { Col,Row } from 'reactstrap'
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"
import toursImg from "../assets/images/tours.png"

const serviceData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Calculate weather based on location"
    },
    {
        imgUrl: guideImg,
        title: "Tour Guide",
        desc: "Get a tour guide for your next Adventure trip"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Customize your trip As per Your Need"
    },
    {
        imgUrl: toursImg,
        title: "Tours",
        desc: "Discover amazing tours and destinations"
      }
]

const ServiceList = () => {
  return (
    <div>
        {
              <Row>
              {serviceData.map((item, index) => (
                <Col lg="3" key={index}>
                  <ServiceCard item={item} />
                </Col>
              ))}
            </Row>
        }
    </div>
  )
}

export default ServiceList