import React from "react";
import { useState } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, Button, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating, totalRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    userId: "1",
    userEmail: "example@gmail.com",
    fullname: "",
    phone: "",
    bookAt: "",
    guestSize: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/thank-you')
  };

  const taxes = (0.05 * price * (credentials.guestSize || 1)).toFixed(2)
  const total = (price * (credentials.guestSize || 1) * 1.05).toFixed(2);

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/Per Person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Date"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest Size"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i>
              {credentials.guestSize || 1} Person
            </h5>
            <span>${price * (credentials.guestSize || 1)}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Taxes</h5>
            <span>
              ${taxes}
            </span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>
              ${total}
            </span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
