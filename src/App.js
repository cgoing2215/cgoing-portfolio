import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import PortfolioHeader from './components/PortfolioHeader/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App fade-in">
      <div className='sticky-header'>
        <Header />
      </div>
        <About />
        <PortfolioHeader />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
