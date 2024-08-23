import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Gonzuella",
    feedback:
      "I’ve never felt more secure about shipping my packages! Every time I send something through Vishis, I know it's in safe hands. Their real-time tracking keeps me updated, and their 24/7 customer support has always been there to help me with any questions. I love how they prioritize package care—everything always arrives in perfect condition. Highly recommend!",
    location: "New York, NY",
  },
  {
    name: "Miller Temili",
    feedback:
      "[Delivery Agency] truly sets the standard for delivery services. My packages always arrive on time, and I’m amazed at how careful they are with handling fragile items. The best part is their 24-hour support team—they respond instantly and provide real-time updates, so I never feel out of the loop. If you want peace of mind, this is the service to use!",
    location: "Los Angeles, CA",
  },
  {
    name: "Michael Harrington",
    feedback:
      "I’ve been using Vishis for all my deliveries, and I couldn't be happier! They take great care of your packages, ensuring everything arrives in perfect condition. Plus, their real-time tracking is so accurate, and having 24-hour support makes a huge difference. If you value reliability and top-notch service, you won’t be disappointed!",
    location: "Chicago, IL",
  },
  {
    name: "Emily Davis",
    feedback:
      "Vishis is hands down the best delivery service I’ve used! Their attention to detail and the way they handle packages is fantastic. I love that I can track my delivery in real-time, and their 24-hour support means I can always reach someone if I have a concern. Knowing they’ve got my back gives me such confidence in every shipment!",
    location: "Houston, TX",
  },
  {
    name: "Robert Brown",
    feedback:
      "I can't praise Vishis enough for their exceptional service! The care they take with each package is evident, and their 24/7 support team is always ready to assist, no matter the time of day. The real-time feedback feature keeps me updated throughout the entire process, so I know exactly when my package will arrive. A top-tier service that I trust completely!",
    location: "Miami, FL",
  },
];

// Styled components
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TestimonialCard = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Feedback = styled.p`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 400;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Feedback>"{testimonial.feedback}"</Feedback>
            <Name>{testimonial.name}</Name>
            <Location>{testimonial.location}</Location>
          </TestimonialCard>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSlider;
