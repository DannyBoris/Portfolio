//@ts-nocheck
import { useState } from "react";
import { Project } from "../..";
import "./index.less";
import TechIcon from "../tech-icon";
import { IPhoneX } from "react-app-preview-component";

const ProjectCard = ({
  name,
  techUsed,
  description,
  link,
  images,
}: Project) => {
  const [isFlipped, setFlipped] = useState(false);

  function handleHover() {
    setFlipped((prev) => !prev);
  }

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="project-card1">
      <div>
        <h3>{name}</h3>
        {/* <p>{description}</p> */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            borderRadius: 8,
            border: "1px solid rgba(144,144,144,.2)",
          }}
          width={450}
          src={images.desktop}
        />
        <img
          style={{
            objectFit: "contain",
            borderRadius: 8,
            border: "1px solid rgba(144,144,144,.2)",
          }}
          width={150}
          src={images.mobile}
        />
      </div>

      <a className="site-link" href={link}>
        Visit production website
      </a>
      <div className={`hovered-popup ${isFlipped ? "flipped" : ""}`}></div>
    </div>
  );
};

export default ProjectCard;
