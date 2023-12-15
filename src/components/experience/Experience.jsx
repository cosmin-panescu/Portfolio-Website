import React from 'react';
import './Experience.scss';

const Experience = () => {
  return (
    <section className="section experience" id='experience'>
      <h2 className="section-title">Experience</h2>
      <span className="section-subtitle">- My journey -</span>

      <div className="experience-container container">
        <div className="experience-sections">

          <div className="experience-data">
            <div>
              <h3 className='experience-title'>Database Analyst</h3>
              <span className="experience-subtitle">Regina Maria</span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>

            <div>
              <span className="experience-round"></span>
              <span className="experience-line"></span>
            </div>
          </div>

          <div className="experience-data">
            <div></div>
            
            <div>
              <span className="experience-round"></span>
              <span className="experience-line"></span>
            </div>

            <div>
              <h3 className='experience-title'>Digital Marketer</h3>
              <span className="experience-subtitle">RosPlant</span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                2023 - 2023
              </div>
            </div>
          </div>

          <div className="experience-data">
            <div>
              <h3 className='experience-title'>Student</h3>
              <span className="experience-subtitle">University of Bucharest</span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>

            <div>
              <span className="experience-round"></span>
              <span className="experience-line"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience