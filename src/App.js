import './App.css';
import Hero from './components/Hero/Hero'
import Bio from './components/Bio/Bio'
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Contacts />
    </div>
  );
}

export default App;
