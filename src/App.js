import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
