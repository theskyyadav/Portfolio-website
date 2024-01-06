import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
       < Home />
       <Sociallinks />
       <About />
       <Portfolio />
       <Experience />
       <Contact />
    </div>
  );
}

export default App;
