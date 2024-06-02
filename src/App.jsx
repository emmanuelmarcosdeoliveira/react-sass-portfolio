import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./scss/container.scss";

function App() {
  return (
    <div id="portfolio" className="container">
      <h1> Emmanuel Oliveira</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
