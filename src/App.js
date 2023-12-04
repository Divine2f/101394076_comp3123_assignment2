import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import ViewEmployee from './components/ViewEmployee';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<EmployeeList />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          <Route path='/employee/:id' element={<ViewEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;