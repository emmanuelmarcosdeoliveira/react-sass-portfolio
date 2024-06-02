import About from "../About";
import Technologies from "../Technologies";
import Projects from "../Projects";
import "./maincontent.scss";

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  );
};

export default MainContent;
