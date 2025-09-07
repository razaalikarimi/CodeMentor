import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1>Start Your Journey to the Top 1% of Developers</h1>
        <p>
          Master coding, sharpen your skills, and unlock opportunities with expert guidance and hands-on projects. Your journey to success starts here.
        </p>
        <button onClick={() => navigate('/courses')} className="common-btn hover-effect">
          Get Started
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-boxes">
          <div className="feature-box">
            <h3>Interactive Lessons</h3>
            <p>Engage with real-time projects for practical knowledge.</p>
          </div>
          <div className="feature-box">
            <h3>Industry-Relevant Curriculum</h3>
            <p>Learn from a curriculum designed by industry experts.</p>
          </div>
          <div className="feature-box">
            <h3>Supportive Community</h3>
            <p>Get mentorship and collaborate with peers.</p>
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
