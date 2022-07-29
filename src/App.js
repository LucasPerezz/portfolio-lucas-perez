import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Data from './Components/context/Data.js';
import Presentation from './Components/Presentation/Presentation';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
    <Data>
      <Presentation />
      <AboutMe />
      <Skills />
    </Data>
    </>
  );
}

export default App;
