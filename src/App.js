import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Notificationbar from './components/Notificationbar';
import Card from './components/Card';
// import Creditsummary from './components/Creditsummary';
import Sidebar from "./components/Sidebar.js";
import Dashboard from './pages/Dashboard.jsx';
import Countries from './pages/Countries.jsx';
import Leads from './pages/Leads.jsx';
import Billing from './pages/Billing.jsx';
import Heading from "./components/Heading.js";

function App() {
  return (
    <div >
    {/* <Sidebar />
    
    < Creditsummary />  */}

    <BrowserRouter>
    <Notificationbar />
    <Heading />
    <Card />
          <Sidebar>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/countries" element={<Countries/>}/>
                <Route path="/leads" element={<Leads/>}/>
                <Route path="/billing" element={<Billing/>}/>
            </Routes>
            </Sidebar>
            
    </BrowserRouter>


    </div>
  );
}

export default App;
