import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Education/>
        <Projects/>
    </div>
  );
}

export default App;
