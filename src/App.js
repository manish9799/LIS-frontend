import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Analyzer from './pages/Analyzer';
import AnalyzerParameter from './pages/AnalyzerParameter';
import CPT from './pages/CPT';
import LISCode from './pages/LISCode';
import TestParameter from './pages/TestParameter';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import NavDrawer from './components/Navbar/NavDrawer';
import GenLookups from './pages/GenLookups';
import InvoiceDetails from './pages/InvoiceDetails';
import InvoiceMasters from './pages/InvoiceMasters';
import Modules from './pages/Modules';
import RoleModules from './pages/RoleModules';
import Roles from './pages/Roles';
import OrderDetails from './pages/OrderDetails';
import OrderMasters from './pages/OrderMasters';
import PathologyPendingQueues from './pages/PathologyPendingQueues';
import PathologyResultMasters from './pages/PathologyResultMasters';
import Testcategories from './pages/Testcategories';
import TestSamples from './pages/TestSamples';
import TestUnits from './pages/TestUnits';
import Users from './pages/Users';
import PathologyResultDetails from './pages/PathologyResultDetails';
import AlertDialog from './components/AlertDialog';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import HISAnalyzer from './pages/HISAnalyzer';
import His from './pages/His';
import HeartBeat from './pages/HeartBeat';

function App() {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const alert = useSelector((state) => state.alertReducer);
  const {type, message, progress} = alert;

  useEffect(() => {
    if(type) setShowAlert(true);
    setTimeout(() => {
      dispatch({
        type :'SET_INITIALSTATE'
      })
    }, 5000);
  }, [alert]);

  return (
    <div className="App">
      <BrowserRouter // basename={config.basename} 
      >
        <Navbar />
        {type && <AlertDialog type={type} message={message} openAlert={[showAlert, setShowAlert]} />}
        {/* <NavDrawer/> */}
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/analyzer' exact Component={Analyzer} />
          <Route path='/analyzerParameter' Component={AnalyzerParameter} />
          <Route path='/CPT' Component={CPT} />
          <Route path='/LISCode' Component={LISCode} />
          <Route path='/His' Component={His} />
          <Route path='/HISAnalyzer' Component={HISAnalyzer} />
          <Route path='/GenLookups' Component={GenLookups} />
          <Route path='/InvoiceDetails' Component={InvoiceDetails} />
          <Route path='/InvoiceMasters' Component={InvoiceMasters} />
          <Route path='/Modules' Component={Modules} />
          <Route path='/RoleModules' Component={RoleModules} />
          <Route path='/Roles' Component={Roles} />
          <Route path='/OrderDetails' Component={OrderDetails} />
          <Route path='/OrderMasters' Component={OrderMasters} />
          <Route path='/PathologyPendingQueues' Component={PathologyPendingQueues} />
          <Route path='/PathologyResultDetails' Component={PathologyResultDetails} />
          <Route path='/PathologyResultMasters' Component={PathologyResultMasters} />
          <Route path='/HeartBeatResults' Component={HeartBeat} />
          <Route path='/TestCategories' Component={Testcategories} />
          <Route path='/TestParameters' Component={TestParameter} />
          <Route path='/TestSamples' Component={TestSamples} />
          <Route path='/TestUnits' Component={TestUnits} />
          <Route path='/Users' Component={Users} />
          {/* <Route path='/*'  Component={NotFoundPage}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
