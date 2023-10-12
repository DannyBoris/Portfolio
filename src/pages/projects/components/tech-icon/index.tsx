import { useState } from "react";
import "./index.less";

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  const [isHovered, setHovered] = useState(false);

  function handleHover() {
    setHovered((prev) => !prev);
  }

  return (
    <div
      className={`tech-icon ${isHovered ? `hovered` : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img width="30px" src={icon} />
    </div>
  );
};

export default TechIcon;
