import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Project Lifecycle</h2>
        <p>
          Every project follows a unique lifecycle, from inception to completion. We ensure to manage
          each phase effectively to deliver optimal outcomes for our clients and stakeholders.
        </p>
      </div>

        <div className="project-description">
          <h3>Projects</h3>
          <p>1. Tourist Management System</p>
          <p>
            A Tourist Management System built using servlets is a web application that helps manage the information 
            related to tourists, their bookings, packages, and other related services. This type of project typically 
            involves functionalities like managing customer details, booking tours, displaying tourist destinations, and 
            integrating with payment systems.
          </p>
          <div className="projects-content">
        <div className="project-img">
          <img 
            src="/images/kashmir.png"  // Image path from the public directory
            alt="Kashmir Tourist Destination"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
          <p>2. Insurance Management System using Spring Framework</p>
          <p>
            An Insurance Management System built using the Spring Framework is a web-based application designed to 
            manage insurance policies, claims, and customer details. The application helps insurance companies automate 
            their internal processes, manage policies, track claims, and provide an easy interface for customers to view 
            and manage their insurance plans.
          </p>
          <div className="project-img">
          <img 
            src="/images/insurance.png"  // Image path from the public directory
            alt="Insurance"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
