import { techs } from "../../constants";
import ProjectCard from "./components/project-card";
import "./project-card.less";

export type Project = {
  name: string;
  developmentYears: string;
  images: any;
  techUsed: any[];
  description: string;
  link: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Lokali",
      description:
        "Lokali is a social network providing individuals and companies to trade services and goods",
      developmentYears: "2019-2020",
      images: {
        mobile: "/images/lokali-mobile.png",
        desktop: "/images/lokali-desktop.png",
      },
      techUsed: [techs.node, techs.react, techs.firebase, techs.mui],
      link: "https://lokali.me",
    },
    {
      name: "Trado",
      description:
        "Trados vision is to cut the middle man between customer and producer making it the perfect tool to buy goods without loosing money",
      developmentYears: "2020",
      images: {
        mobile: "/images/trado-mobile.png",
        desktop: "/images/trado-desktop.png",
      },
      techUsed: [techs.react, techs.node, techs.mongodb],
      link: "https://trado.co.il",
    },
    {
      name: "Vimeo",
      description:
        "Vimeo create is the leading technology for video creation and editting used by millions worldwide.",
      developmentYears: "2020-2021",
      images: {
        desktop: "/images/vimeo-desktop.png",
      },
      techUsed: [techs.react, techs.redux, techs.ts],
      link: "https://vimeo.com/create",
    },
    {
      description: "2020-2021",
      name: "Sporteams",
      developmentYears: "2020-2021",
      images: [],
      techUsed: [techs.react, techs.node, techs.mongodb],
      link: "https://spotimz-api.onrender.com/",
    },
    {
      name: "Gamifyd.ai",
      description:
        "Gamifyd.ai is an AI platform for game creation (unreal engine) from music files",
      developmentYears: "2018-2019",
      images: {
        desktop: "/images/gamifyd-desktop.png",
        mobile: "/images/gamifyd-mobile.png",
      },
      techUsed: [techs.react, techs.aws, techs],
      link: "https://master.gamifyd.ai",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-card-container">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
