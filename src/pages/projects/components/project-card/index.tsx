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

  return (
    <div className="project-card1">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div style={{ display: "flex",alignItems:'baseline' }}>
        <img style={{objectFit:'contain'}} width={400} src={images.desktop} />
        <img style={{objectFit:'contain'}} width={150} src={images.mobile} />
      </div>

      <a className="site-link" href={link}>
        Visit production website
      </a>
    </div>
  );
};

export default ProjectCard;
