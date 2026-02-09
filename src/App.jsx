import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LoginPage from './pages/LoginPage';
// Import other components if needed for other routes
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* Add other routes here, e.g., protected routes */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
