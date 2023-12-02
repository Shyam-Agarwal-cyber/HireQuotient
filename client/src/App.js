import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Partners from './components/Partners';
import BuildingBlocks from './components/BuildingBlocks';
import Teams from './components/Teams';
import GlobalMovement from './components/GlobalMovement';
import Uses from './components/Uses';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='mid-comp'>
        <Introduction/>
        <Features/>
        <Partners/>
        <BuildingBlocks/>
        <Teams/>
        <GlobalMovement/>
        <Uses/>
        <GetStarted/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
