import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Countries from './pages/Countries.jsx';
import Leads from './pages/Leads.jsx';
import Billing from './pages/Billing.jsx';

function App() {
  return (
    <div >
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Dashboard />}/>
                {/* <Route path="/dashboard" element={<Dashboard />}/> */}
                <Route path="/countries" element={<Countries />}/>
                <Route path="/leads" element={<Leads />}/>
                <Route path="/billing" element={<Billing />}/>
            </Routes> 
        </BrowserRouter>

    </div>
  );
}

export default App;
