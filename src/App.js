import logo from './logo.svg';
import './App.css';
import './design.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
          {/* <Route path='/redirect1' element={<Home/>}/>
          <Route path='/redirect2' element={<Home/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
