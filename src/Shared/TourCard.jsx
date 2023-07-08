import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Tourcard.css';

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, avgRating, reviews } = tour;

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour" />
          <span>Featured</span>
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line">{city}</i>
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill">{avgRating}</i>
              {reviews.length ? <span>({reviews.length})</span> : <span>Not Rated</span>}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price}<span>/Per Person</span></h5>
            <button className='btn booking__btn'>
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
