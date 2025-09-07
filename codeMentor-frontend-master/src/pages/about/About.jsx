import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2 className="heading">Transform Your Future with Us</h2>
        <p className="description">
          Our e-learning platform empowers students to build successful careers by providing a variety of high-quality coding courses. 
          With interactive learning modules, real-world projects, and expert guidance, we help you master essential skills needed for today’s job market.
        </p>
        
        <h2 className="sub-heading">Success Stories from Our Students</h2>
        <div className="card-container">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="card" key={index}>
              <div className="card-image-container">
                <img 
                  src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} 
                  alt={`Student ${index + 1}`} 
                  className="card-image" 
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Student {index + 1}</h3>
                <p className="card-description">
                  "This platform has changed my life! The courses are well-structured and the support from instructors is fantastic."
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="promise-heading">Join Us Today for a Bright Tomorrow!</h2>
        <p className="description">
          Don’t miss the chance to enhance your skills and take the first step towards a successful career. 
          Join our community of learners and unlock your potential!
        </p>
      </div>
    </div>
  );
};

export default About;
