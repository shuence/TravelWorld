import React, { useRef, useState } from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
  
    // Create a search object with the non-empty search parameters
    const searchParams = new URLSearchParams();
    if (location) searchParams.append("city", location);
    if (distance) searchParams.append("distance", distance);
    if (maxGroupSize) searchParams.append("maxGroupSize", maxGroupSize);
  
    try {
      // Make an API call to fetch the search results
      const response = await axios.get(`${BASE_URL}/search?${searchParams}`);
    
      // Update the state with the search results
      setSearchResult(response.data.data);
      console.log(response)
  
      navigate(`/search?${searchParams}`, { state: { searchResult: response.data.data } });
    } catch (error) {
      alert("Failed to fetch search results: " + error.message);
    }
  };

  
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line" />
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line" />
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-group-line" />
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line" />
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
