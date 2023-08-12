
import './App.css';

import React, { Component } from "react"
import News from './Components/News';
import Navbar from './Components/Navbar';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
 const apiKey = "6e8986bcac67477a90105db76662424d"

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="unique" apiKey={apiKey} pageSize={10} category="" />} />
            {/* <Route exact path='general' element={<News key="general" apiKey={apiKey} pageSize={6} category="general" />} />
            <Route exact path='entertainment' element={<News key="entertairment" apiKey={apiKey} pageSize={6} category="entertainment" />} />
            <Route exact path='sports' element={<News key="sports" apiKey={apiKey} pageSize={6} category="sports" />} />
            <Route exact path='health' element={<News key="health" apiKey={apiKey} pageSize={6} category="health" />} />
            <Route exact path='science' element={<News key="science" apiKey={apiKey} pageSize={6} category="science" />} />
            <Route exact path='business' element={<News key="business" apiKey={apiKey} pageSize={6} category="business" />} /> */}

            {/* <Route exact path='technology' element={<News key="technology" apiKey={apiKey} pageSize={6} category="technology" />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>



  )

}

export default App;
