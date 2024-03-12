const Marketing = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">
        Back-End
        <br />
        <span>(beginner)</span>
      </h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">SQL/MySQL</h3>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">Node.js</h3>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills-name">Express.js</h3>
          </div>
        </div>

        {/* <div className="skills-group">
                </div> */}
      </div>
    </div>
  );
};

export default Marketing;
