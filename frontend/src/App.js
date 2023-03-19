import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Monitor from './pages/Monitor';
import Summary from "./pages/Summary"
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Monitor />} />
        <Route exact path="/summary" element={<Summary />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;






