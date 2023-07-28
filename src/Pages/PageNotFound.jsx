import React from "react";
import { Container, Row, Button } from "reactstrap";
import "../styles/NotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <Container>
        <Row>
          <div md={7} className="not-found-content">
            <h1 className="display-4">Oops!</h1>
            <p className="lead">We couldn't find the page you're looking for.</p>
            <Button color="primary" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default PageNotFound;
