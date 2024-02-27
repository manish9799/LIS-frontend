import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Analyzer from './pages/Analyzer';
import AnalyzerParameter from './pages/AnalyzerParameter';
import CPT from './pages/CPT';
import LISCode from './pages/LISCode';
import TestParameter from './pages/TestParameter';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter
      // basename={config.basename}
      >
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/analyzer' exact Component={Analyzer} />
          <Route path='/analyzerParameter' Component={AnalyzerParameter} />
          <Route path='/CPT' Component={CPT} />
          <Route path='/LSICode' Component={LISCode} />
          <Route path='/TestParameter' Component={TestParameter} />
          {/* <Route path='/*'  Component={NotFoundPage}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
