import React from 'react';
import Home from './xs-dashboard/component/Home';
import Feed from './xs-dashboard/component/Feed/Feed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {
    
    const [show, setShow] = useState(true);
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
