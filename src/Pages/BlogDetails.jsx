import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, ListGroup, Alert } from "reactstrap";
import avtar from "../assets/images/avatar.jpg";
import "../styles/Blogdetails.css";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import FeaturedBlogsList from "../Components/FeaturedBlogs.jsx/FeaturedBlogsList";
import Subtitle from "../Shared/Subtitle";
import Newsletter from "../Shared/Newsletter";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const commentMsgRef = useRef("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [commentStatus, setCommentStatus] = useState(null);
  const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error loading blog details.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const {
    data: fetchedComments,
    loading: loadingComments,
    error: errorComments,
  } = useFetch(`comment/${id}/`);

  useEffect(() => {
    if (fetchedComments) {
      setComments(fetchedComments);
    }
  }, [fetchedComments]);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      setIsLoginAlertVisible(true);
      return;
    }

    const commentMsg = commentMsgRef.current.value;
    const username = user.username;

    const commentData = {
      comment: commentMsg,
      username: username,
    };

    try {
      const response = await axios.post(`${BASE_URL}/comment/${id}`, commentData);

      setComments([...comments, response.data]);
      commentMsgRef.current.value = "";
      setCommentStatus("success");
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (error) {
      setCommentStatus("error");
    }
  };

  if (loading || loadingComments) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  if (error || !blog || errorComments) {
    return <div className="error__msg">Error loading blog details. Check your network</div>;
  }

  const { title, author, createdAt, photo, content } = blog;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="blog__content">
                <div className="blog__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="blog__rating d-flex align-items-center gap-1">
                      <span>
                        <i className="ri-user-line"></i>
                        {author}
                      </span>
                    </span>
                  </div>
                  <div className="blog__extra-details">
                    <span>
                      <i className="ri-calendar-line"></i>
                      {new Date(createdAt).toLocaleDateString("en-in", options)}
                    </span>
                    <span>
                      <i className="ri-chat-3-line"></i>
                      {comments?.length || 0}{" "}
                      {comments?.length === 1 ? "Comment" : "Comments"}
                    </span>
                  </div>
                  <h5>Blog Content</h5>
                  <p>{content}</p>
                  <img src={photo} alt="" />
                </div>

                <div className="blog__reviews mt-4">
                  <h4>Comment </h4>
                  {commentStatus === "success" && (
                    <Alert color="success" toggle={() => setCommentStatus(null)}>
                      Comment successfully.
                    </Alert>
                  )}
                  {commentStatus === "error" && (
                    <Alert
                      color="danger"
                      className=""
                      toggle={() => setCommentStatus(null)}
                    >
                      Failed to add comment. Please try again.
                    </Alert>
                  )}
                  {isLoginAlertVisible && (
                    <Alert
                      color="warning"
                      className=""
                      toggle={() => setIsLoginAlertVisible(false)}
                    >
                      Please login to add comment.
                    </Alert>
                  )}
                  <Form onSubmit={submitHandler}>
                    <div className="review__input">
                      <input
                        type="text"
                        placeholder="Share your Thoughts"
                        required
                        ref={commentMsgRef}
                      />
                      <button className="primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {comments?.map((comment, index) => (
                      <div className="review__item" key={index}>
                        <img src={avtar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{comment.username}</h5>
                              <p>
                                {new Date(comment.createdAt).toLocaleDateString(
                                  "en-in",
                                  options
                                )}
                              </p>
                            </div>
                          </div>
                          <h6>{comment.comment}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="Featured__blogs">
                <div className="title">
                  <Subtitle subtitle={"Featured Blogs"} />
                </div>
                <div className="mx-auto md:text-center">
                  <FeaturedBlogsList lg={11} md={10} sm={11} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default BlogDetails;
