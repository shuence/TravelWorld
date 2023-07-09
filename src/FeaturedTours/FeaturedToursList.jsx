import React from 'react'
import TourCard from '../Shared/TourCard'
import tourData from '../assets/data/tours'
import { Col } from 'reactstrap'

const FeaturedToursList = () => {
  return (
    tourData.map(tour=> (
        <Col lg="3" md="4" sm="6" className='mb-4' key={tour.id}>
            <TourCard tour={tour}/>
        </Col>
    ))
  )
}

export default FeaturedToursList