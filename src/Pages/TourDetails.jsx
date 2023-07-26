import React, { useState, useRef, useEffect, useContext } from "react";
import { Container, Row, Col, Form, ListGroup, Alert } from "reactstrap";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import calculateAvgRating from "../utils/avgRating";
import avtar from "../assets/images/avatar.jpg";
import Booking from "../Component/Booking/Booking";
import Newsletter from "../Shared/Newsletter";
import "../styles/Tourdetails.css";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const [isReviewSuccess, setIsReviewSuccess] = useState(false);
  const [isReviewError, setIsReviewError] = useState(false);
  const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);

  // Fetch tour data using tourId (if available)
  const {
    data: tour,
    loading: loadingTour,
    error: errorTour,
  } = useFetch(`tours/${id}`);

  // Fetch reviews for the tour using tourId (if available)
  const {
    data: fetchedReviews,
    loading: loadingReviews,
    error: errorReviews,
  } = useFetch(`review/${id}/`);

  // Fetch updated reviews from server
  useEffect(() => {
    if (fetchedReviews) {
      setReviews(fetchedReviews);
    }
  }, [fetchedReviews]);

  // Perform error handling in case the tour or reviews are still loading
  if (loadingTour || loadingReviews) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  // Perform error handling in case there's an error fetching the tour or reviews
  if (errorTour || !tour || errorReviews) {
    return <div>Error loading tour details.</div>;
  }

  const { photo, title, desc, price, city, distance, address, maxGroupSize } =
    tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      setIsLoginAlertVisible(true);
      return;
    }

    const reviewMsg = reviewMsgRef.current.value;
    const username = user.username;

    const reviewData = {
      rating: tourRating,
      reviewText: reviewMsg,
      username: username,
    };

    try {
      const response = await axios.post(`${BASE_URL}/review/${id}`, reviewData);


      // Update the reviews state with the new review
      setReviews([...reviews, response.data]);

      // Reset review form fields
      setTourRating(null);
      reviewMsgRef.current.value = "";

      setIsReviewSuccess(true);
      window.location.reload();
    } catch (error) {
      setIsReviewError(true);
    }
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
                        <span>({reviews.length || 0})</span>
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
                      <i className="ri-money-dollar-circle-line"></i> {price}
                      /Per Person
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
                  <h4>Reviews ({reviews?.length || 0} reviews)</h4>
                  {isReviewSuccess && (
                    <Alert
                      color="success"
                      toggle={() => setIsReviewSuccess(false)}
                    >
                      Review Successful
                    </Alert>
                  )}

                  {isReviewError && (
                    <Alert
                      color="danger"
                      className=""
                      toggle={() => setIsReviewError(false)}
                    >
                      Failed to submit review. Please try again.
                    </Alert>
                  )}

                  {isLoginAlertVisible && (
                    <Alert
                      color="warning"
                      toggle={() => setIsLoginAlertVisible(false)}
                    >
                      Please login to submit a review.
                    </Alert>
                  )}
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={value}
                          onClick={() => handleRatingClick(value)}
                          className={
                            tourRating && value <= tourRating ? "active" : ""
                          }
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
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-in",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} reviews={reviews} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />

      {/* Bootstrap Alerts */}
    </>
  );
};

export default TourDetails;
