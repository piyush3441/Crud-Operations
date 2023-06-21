import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from "./components/Home"
import Create from './components/create';
import About from './components/About';
import Contact from "./components/Contact";
import Edit from './components/Edit';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/create' element = {<Create/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/edit' element = {<Edit/>}/>
          <Route path='/services' element = {<Services/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
