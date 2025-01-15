import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { lazy, Suspense } from 'react';

const TxnsInfoPage = lazy(() => import('./pages/TxnsInfoPage'));
const CardInfoPage = lazy(() => import('./pages/CardInfoPage'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/cards" />} />
          <Route path="/transactions" element={<TxnsInfoPage />} />
          <Route path="/cards" element={<CardInfoPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;