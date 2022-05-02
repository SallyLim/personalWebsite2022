import './App.css';
import Header from './Components/Header/Header';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Experience from './Page/Experience/Experience';
import LandingPage from './Page/LandingPage/LandingPage';
import Work from './Page/Work/Work';

function App() {
  return (
    <div className="MainPage">
      <Header />
      <div className="Body">
        <LandingPage/>
        <About/>
        <Work />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;

//TODO: check responsiveness -> mobile compatibility