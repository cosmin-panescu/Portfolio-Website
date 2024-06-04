const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">
        Front-End <br />
        {/* <span>(intermediate)</span> */}
      </h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">HTML</h3>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">SCSS/CSS</h3>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">JavaScript</h3>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">React.js</h3>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">Git</h3>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">Tailwind CSS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
