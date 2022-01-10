import React from "react";
import Project from "./Project";
import CopyRight from "./CopyRight";

const Projects = ({ projects }) => {
  return (
    <div className="main">
      <section>
        <div className="title">
          <h2>Projects</h2>
          <h3>Some of my work in the University</h3>
          <div className="underline"></div>
        </div>
        <div>
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </section>
      <hr />
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
};

export default Projects;
