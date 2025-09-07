import React from 'react';
import './testimonials.css';

const Testimonial = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "Michael Brown",
            position: "Web Developer",
            message:
                "This platform transformed my skills. The project-based learning helped me grow professionally.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            name: "Emily Davis",
            position: "Software Engineer",
            message:
                "I love the way this platform teaches. It’s interactive and makes learning fun!",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 3,
            name: "David Lee",
            position: "Full Stack Developer",
            message:
                "Hands-on projects gave me real-world experience. This platform is a game-changer!",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
        },
       
    ];

    return (
        <section className='testimonial'>
            <h2>What Our Students Say</h2>
            <div className="testimonial-cards">
                {testimonialsData.map((e) => (
                    <div className="testimonial-card" key={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt={`${e.name}`} />
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                            <p className="name">{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
