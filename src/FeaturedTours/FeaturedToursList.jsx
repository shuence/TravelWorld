import React from 'react';
import TourCard from '../Shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from '../hooks/useFetch';

const FeaturedToursList = () => {
  const { data: featuredTours, loading } = useFetch(`tours/featured`);
  
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {Array.isArray(featuredTours) &&
        featuredTours.map((tour) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedToursList;
