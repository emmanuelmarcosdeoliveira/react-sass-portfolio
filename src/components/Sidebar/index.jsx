import Avatar from "/Emmanuel.jpg";
import Contacts from "../Contacts";
import RedesSocias from "../RedesSociais";
import { WiDirectionUpRight } from "react-icons/wi";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Emmanuel Marcos de Oliveira"></img>
      <p className="title"> Developer FullStack </p>
      <RedesSocias />
      <Contacts />

      <a href="" className="btn">
        Curriculum
        <WiDirectionUpRight className="direction" />
      </a>
    </aside>
  );
};

export default Sidebar;
