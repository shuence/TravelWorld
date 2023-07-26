import React, { useState } from 'react';
import './FAQ.css';
import { Container, Row, Col } from 'reactstrap';
import Newsletter from './Newsletter';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is the best time to visit this destination?',
      answer:
        'The best time to visit this destination is during the months of [insert best months here]. The weather is pleasant, and you can enjoy various outdoor activities without extreme heat or cold.',
    },
    {
      question: 'How do I book a tour package?',
      answer:
        'Booking a tour package is simple. You can either visit our website and book online, or you can contact our customer support team and they will assist you with the booking process.',
    },
    {
      question: 'Are there any special discounts for group bookings?',
      answer:
        'Yes, we offer special discounts for group bookings. If you are planning to travel with a group, please get in touch with our customer support team to avail of group discounts.',
    },
    {
      question: 'What kind of accommodations do you provide?',
      answer:
        'We provide a range of accommodations, including luxury hotels, budget-friendly guesthouses, and cozy homestays. You can choose the type of accommodation that suits your preferences and budget.',
    },
    {
      question: 'Do you offer travel insurance?',
      answer:
        'Yes, we offer travel insurance for our customers. Travel insurance provides coverage for medical emergencies, trip cancellations, lost baggage, and other unforeseen events during your journey.',
    },
  ];

  // State to keep track of which question's answer to show/hide
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <><section>
          <Container>
              <Row>
                  <Col>
                      <h2 className="text-center">Frequently Asked Questions</h2>
                      <div className="faq__wrapper">
                          {faqData.map((item, index) => (
                              <div
                                  className={`faq__item ${activeQuestion === index ? 'active' : ''}`}
                                  key={index}
                                  onClick={() => toggleQuestion(index)}
                              >
                                  <div className="faq__question">
                                      <h4>{item.question} <span>{activeQuestion === index ? <i className="ri-arrow-drop-up-line"></i> : <i className="ri-arrow-drop-down-line"></i>}</span>
                                      </h4>
                                  </div>
                                  {activeQuestion === index && <p>{item.answer}</p>}
                              </div>
                          ))}
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default FAQ;
