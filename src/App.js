import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Skills/>
        <Education/>
        <Projects/>
    </div>
  );
}

export default App;
