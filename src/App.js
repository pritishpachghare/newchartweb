import './App.css';
import Navbar from './Component/Navbar';
import NewGraphsAndChart from './Component/NewGraphsAndChart';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer'
import AllPieChart from './Component/AllPieChart';
import AllAreaBar from './Component/AllAreaBar';
import AllBarGraph from './Component/AllBarGraph';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route exact path='/' element={<NewGraphsAndChart />} />
        <Route exact path='/graphs' element={<AllPieChart />} />
        <Route exact path='/contact' element={<AllAreaBar/>} />
        <Route exact path='/bargraph' element={<AllBarGraph/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
