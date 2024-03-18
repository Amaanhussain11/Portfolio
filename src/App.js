import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About />
     <Skill />
     {/* <Work /> */}
     <Contact />
    </>
  );
}

export default App;
