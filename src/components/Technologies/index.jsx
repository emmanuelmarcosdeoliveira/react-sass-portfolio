import "./technologies.scss";
import { FaVuejs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

const Technologies = () => {
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React.js", icon: <DiReact /> },
    { id: "vue", name: "Vue.js", icon: <FaVuejs /> },
    { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
  ];
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="thechnologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology.info">
              <h3>{tech.name}</h3>
              <p>Lorem 222 2 22 2 2 2 2 </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
