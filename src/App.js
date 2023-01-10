import AOS from 'aos';
import bootstrap from 'bootstrap';
import './Banner.css';
import Home from "./Components/Home";
import AboutMe from './Components/AboutMe';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import 'aos/dist/aos.css';
import Card from './Card';

function App() {
  AOS.init();

  return (
    <div>
      <Home />
      <AboutMe />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
