import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analyzer from './components/Analyzer';
import AnalyzerParameter from './components/AnalyzerParameter';
import LISCode from './components/LISCode';
import TestParameter from './components/TestParameter';
import Navbar from './components/Navbar/Navbar';
import MainContainer from './components/MainContainer';
import CPT from './components/CPT';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter 
    // basename={config.basename}
    >
      {/* <MainContainer> */}
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/analyzer' exact Component={Analyzer}/>
          <Route path='/analyzerParameter'  Component={AnalyzerParameter}/>
          <Route path='/CPT'  Component={CPT}/>
          <Route path='/LSICode'  Component={LISCode}/>
          <Route path='/TestParameter'  Component={TestParameter}/>
          {/* <Route path='/*'  Component={NotFoundPage}/> */}
        </Routes>
      {/* </MainContainer> */}
</BrowserRouter>
      
    </div>
  );
}

export default App;
