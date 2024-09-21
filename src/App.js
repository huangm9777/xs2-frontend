import React from 'react';
import Home from './page/xs-dashboard/component/Home';
import Feed from './page/xs-dashboard/component/Feed/Feed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Edit from './page/xs-dashboard/component/Edit/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addByAmount } from './store/module/counterStore';
import { fetchChannels } from './store/module/channelStore';


function App() {
  
  return (  


    <div className="App">


{/* 
       <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router> */}
       
    
    </div>
  );
}

export default App;
