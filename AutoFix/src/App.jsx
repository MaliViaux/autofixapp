import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home';
import CarList from './components/CarList';
import AddEditCar from './components/AddEditCar';
import VoucherList from './components/VoucherList';
import AddEditVoucher from './components/AddEditVoucher';
import RecordList from './components/RecordList';
import AddRecord from './components/AddRecord';
import NotFound from './components/NotFound';
import Report2 from './components/Report2';
import Report3 from './components/Report3';
import Report4 from './components/Report4';

function App() {
  return (
    <Router>
        <div className="container">
        <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/car/list" element={<CarList/>} />
            <Route path="/car/add" element={<AddEditCar/>} />
            <Route path="/car/edit/:id" element={<AddEditCar/>} />
            <Route path="/voucher/list" element={<VoucherList/>} />
            <Route path="/voucher/add" element={<AddEditVoucher/>} />
            <Route path="/voucher/edit/:id" element={<AddEditVoucher/>} />
            <Route path="/record/list" element={<RecordList/>} />
            <Route path="/record/add" element={<AddRecord/>} />
            <Route path="/report2" element={<Report2/>} />
            <Route path="/report3" element={<Report3/>} />
            <Route path="/report4" element={<Report4/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App
