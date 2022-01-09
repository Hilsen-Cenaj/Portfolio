import React, { useState } from "react";

// import { Link, useParams } from "react-router-dom";

const Project = ({ id, title, img, description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-project">
      <img src={img} alt={title} />
      <footer>
        <div className="project-description">
          <h3>{title}</h3>
        </div>
        <p>
          {readMore ? description : `${description.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
      </footer>
    </article>
  );
};

export default Project;
