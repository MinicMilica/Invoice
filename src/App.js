import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoice from './components/invoice/Invoice';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
