import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar";
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ServicesItem from './components/ServiceItem';
import RecentWork from './components/RecentWork';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <ServicesItem />
      <RecentWork />
    </div>
  );
}

export default App;
