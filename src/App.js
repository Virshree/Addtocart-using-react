import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom';
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Cards/>}/>
        <Route exact path='/cart/:id' element={<CardDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
