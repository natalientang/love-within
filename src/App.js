import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage  from './pages/MainPage/MainPage';
import AboutPage from './pages/About/About';
import NewJournalPage from './pages/Journal/NewJournal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/journal" element={<NewJournalPage />}/>
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
