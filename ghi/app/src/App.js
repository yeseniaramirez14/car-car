import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServicesList from './ServicesList';
import ServiceForm from './ServiceForm';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import SalesRepList from './SalesRepList';
import SalesRepForm from './SalesRepForm';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import ServiceHistory from './ServiceHistory';
import SalesRecordForm from './SalesRecordFrom';
import SalesRecordList from './SalesRecordList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route path="" element={<ServicesList />} />
            <Route path="new/" element={<ServiceForm />} />
          </Route>
          <Route path="salesrecords">
            <Route path="" element={<SalesRecordList />} />
            <Route path="new/" element={<SalesRecordForm />} />
          </Route>
          <Route path="technicians">
            <Route path="" element={<TechniciansList />} />
            <Route path="new/" element={<TechnicianForm />} />
          </Route>
          <Route path="salesreps">
            <Route path="" element={<SalesRepList />} />
            <Route path="new/" element={<SalesRepForm />} />
          </Route>
          <Route path="customers">
            <Route path="" element={<CustomerList />} />
            <Route path="new/" element={<CustomerForm />} />
          </Route>
          <Route path="servicehistory" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
