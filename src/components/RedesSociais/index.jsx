import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./redessociais.scss";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "instagram", icon: <FaInstagram /> },
  { name: "github", icon: <FaGithub /> },
];

const RedesSocias = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {" "}
          {network.icon}{" "}
        </a>
      ))}
    </section>
  );
};

export default RedesSocias;
