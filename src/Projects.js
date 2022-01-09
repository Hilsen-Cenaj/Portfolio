import React from "react";
import Project from "./Project";
import CopyRight from "./CopyRight";

const Projects = ({ projects }) => {
  return (
    <div className="main">
      <section>
        <div className="title">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div>
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>

        <hr />
        <footer>
          <CopyRight />
        </footer>
      </section>
    </div>
  );
};

export default Projects;
