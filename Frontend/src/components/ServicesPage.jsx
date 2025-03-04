import React from 'react';
const ServicesPage = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Manufacturing</h3>
          <p>Top-quality industrial manufacturing solutions.</p>
          <div className='button'>
            <a href='/hireus'>Hireus</a>
          </div>
        </div>
        <div className="service-card">
          <h3>Engineering</h3>
          <p>Innovative engineering services to optimize your processes.</p>
          <div className='button'>
            <a href='/hireus'>Hireus</a>
          </div>
        </div>
        <div className="service-card">
          <h3>Consulting</h3>
          <p>Expert consultation for your industrial needs.</p>
          <div className='button'>
            <a href='/hireus'>Hireus</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

