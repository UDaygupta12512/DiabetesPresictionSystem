import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import Models from './pages/Models';
import Data from './pages/Data';
import About from './pages/About';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <div className="flex flex-1">
          <Sidebar sidebarOpen={sidebarOpen} />
          
          <div className="flex-1 lg:ml-64">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prediction" element={<Prediction />} />
                <Route path="/models" element={<Models />} />
                <Route path="/data" element={<Data />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;