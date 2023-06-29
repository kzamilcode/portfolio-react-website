import SideNav from "./components/SiderNav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
