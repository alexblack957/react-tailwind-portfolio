import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Education/>

        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
