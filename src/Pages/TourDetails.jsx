import React from "react";
import { useState, useRef } from "react";
import "../styles/Tourdetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avtar from "../assets/images/avatar.jpg";
import Booking from "../Component/Booking/Booking";
import Newsletter from "../Shared/Newsletter";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating} Stars`);
  };

  const handleRatingClick = (value) => {
    setTourRating((prevRating) => (prevRating === value ? null : value));
  };
  

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      <span>Not Rated</span>
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>

                  <span>
                    <i className="ri-map-pin-user-fill"></i>
                    {address}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i>
                    {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> {price}/Per
                    Person
                  </span>
                  <span>
                    <i className="ri-map-pin-line"></i>
                    {distance} Km
                  </span>
                  <span>
                    <i className="ri-group-line"></i>
                    {maxGroupSize} People
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                      key={value}
                      onClick={() => handleRatingClick(value)}
                      className={tourRating && value <= tourRating ? "active" : ""}
                    >
                      {value} <i className="ri-star-fill"></i>
                    </span>
                    
                    ))}
                  </div>

                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your Thoughts"
                      required
                    />
                    <button className="primary__btn text-white" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user__reviews">
                  {reviews?.map((review, index) => (
                    <div className="review__item" key={index}>
                      <img src={avtar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>Shuence</h5>
                            <p>
                              {new Date("07-09-2023").toLocaleDateString(
                                "en-in",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            5<i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>Amazing Tour</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </> 
  );
};

export default TourDetails;
