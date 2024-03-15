import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReportOverViewPage from "../../pages/ReportOverviewPage";
import TeamsPage from "../../pages/TeamsPage";
import ReportPage from "../../pages/ReportPage";
import PageNotFound from "../../pages/404/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/reports" element={<ReportOverViewPage />} />
        <Route path="/reports/:reportId" element={<ReportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
