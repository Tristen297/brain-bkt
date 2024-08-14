import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Navbar from './navbar';
import Footer from './footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='content'>

      </div>
      <Footer />
    </div>
  )
}

export default App;
