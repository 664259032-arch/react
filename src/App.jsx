import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LoginPage from './pages/LoginPage';
// Import other components if needed for other routes
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Footer from './components/Footer';


function DebugInfo() {
  const location = useLocation();
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', fontSize: '12px', zIndex: 9999 }}>
      <p>Base: {import.meta.env.BASE_URL}</p>
      <p>Path: {location.pathname}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* Catch-all route */}
            <Route path="*" element={
              <div style={{ padding: 50, textAlign: 'center' }}>
                <h1>404 - Not Found</h1>
                <p>Current Path: {window.location.hash}</p>
              </div>
            } />
          </Routes>
          <DebugInfo />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
