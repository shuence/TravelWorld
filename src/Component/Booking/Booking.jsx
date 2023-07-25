import React, { useState, useContext } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, Button, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating, totalRating, reviews }) => {
  const { price, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user.username,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    bookAt: "",
    groupSize: "",
  });


  const handleChange = async (e) => {
    setBooking(prev => ({ ...prev, [e.target.id]: e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();    
    try {
      if (!user) {
        alert("Please login to proceed with the booking.");
        navigate("/login");
        return;
      }
      
      const response = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const data = await response.json();

      console.log("Booking Data:", data);

      if (response.status === 200) {
        alert("Booking Successful");
        navigate("/thank-you");
      } else {
        alert("Failed to book: " + response.data.message);
      }
    } catch (error) {
      alert("Failed to book: " + error.response.data.message);
    }
  };

  const taxes = (0.05 * price * (booking.groupSize || 1)).toFixed(2);

  const total = (price * (booking.groupSize || 1) * 1.05).toFixed(2);

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/Per Person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? (
            <span>Not Rated</span>
          ) : (
            <span>({reviews.length || 0})</span>
          )}
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
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
              placeholder="Group Size"
              id="groupSize"
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
              {booking.guestSize || 1} Person
            </h5>
            <span>${price * (booking.guestSize || 1)}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Taxes</h5>
            <span>${taxes}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${total}</span>
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
