import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Navbar from './navbar';
import Home from './home';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>

    </div>
  )
}

export default App;
