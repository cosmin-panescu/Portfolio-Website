import React from "react";
import "./Experience.scss";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <motion.h2
        className="section-title"
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.span
        className="section-subtitle"
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        - My journey -
      </motion.span>

      <div className="experience-container container">
        <div className="experience-sections">
          <div className="experience-data">
            <div></div>

            <div>
              <span className="experience-round"></span>
              <span className="experience-line"></span>
            </div>

            <motion.div
              className="experience-content"
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="experience-title">Web Developer</h3>
              <span className="experience-subtitle">360 Advertising</span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                June 2024 - Present
              </div>
            </motion.div>
          </div>

          <div className="experience-data">
            <motion.div
              className="align-right experience-content"
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="experience-title">Database Analyst</h3>
              <span className="experience-subtitle">Regina Maria</span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                June 2023 - February 2024
              </div>
            </motion.div>

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

            <motion.div
              className="experience-content"
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="experience-title">Web Assistant</h3>
              <span className="experience-subtitle">RosPlant</span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                May - July 2023
              </div>
            </motion.div>
          </div>

          <div className="experience-data">
            <motion.div
              className="align-right experience-content"
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="experience-title">Cybernetics Student</h3>
              <span className="experience-subtitle">
                University of Bucharest
              </span>
              <div className="experience-date">
                <i className="uil uil-calendar-alt"></i>
                2022 - Present
              </div>
            </motion.div>

            <div>
              <span className="experience-round"></span>
              <span className="experience-line fade"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
