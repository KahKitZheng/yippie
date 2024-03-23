import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReportOverViewPage from "../../pages/ReportOverviewPage";
import ReportTemplateEditPage from "../../pages/ReportTemplateEditPage";
import TeamsPage from "../../pages/TeamsPage";
import PageNotFound from "../../pages/404/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/reports" element={<ReportOverViewPage />} />
        <Route
          path="/template/:reportId/edit"
          element={<ReportTemplateEditPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
