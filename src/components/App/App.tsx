import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReportOverViewPage from "../../pages/ReportOverviewPage";
import TeamsPage from "../../pages/TeamsPage";
import ReportPage from "../../pages/ReportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/reports" element={<ReportOverViewPage />} />
        <Route path="/reports/:reportId" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
