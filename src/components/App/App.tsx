import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import TeamsPage from "../../pages/TeamsPage";
import ReportPage from "../../pages/ReportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/report/:reportId" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
