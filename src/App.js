
import './App.css';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage  from './pages/MainPage';
import AboutPage from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </Router>
  );
}

export default (App);
