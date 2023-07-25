import React from "react";
import CommonSection from "../Shared/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import TourCard from "../Shared/TourCard";
import { useLocation, Link } from "react-router-dom";
import "../Shared/searchbar.css";
import Newsletter from "../Shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const searchResult = location.state?.searchResult || [];

  return (
    <div>
      <CommonSection title={"Search Results"} />
      <section>
        <Container>
          <Row>
            {searchResult.length === 0 ? (
              <Col lg="12">
                <div className="no-results">
                  <p>No search results found.</p>
                  <Button className="btn primary__btn w-25 align-items-center">
                    <Link to="/tours">Go to Tours</Link>
                  </Button>
                </div>
              </Col>
            ) : (
              searchResult.map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
          <Row>
            <Col>
              <Newsletter/>
              </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SearchResultList;
