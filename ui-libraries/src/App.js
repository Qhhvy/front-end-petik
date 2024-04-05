import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopRated from './Pages/TopRated';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Detail from './Pages/Detail';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/top" element={<TopRated/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
