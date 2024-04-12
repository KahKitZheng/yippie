import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReportOverViewPage from "../../pages/ReportOverviewPage";
import ReportTemplateEditPage from "../../pages/ReportTemplateEditPage";
import TeamsPage from "../../pages/TeamsPage";
import PageNotFound from "../../pages/404/PageNotFound";
import ReportCreatePage from "../../pages/ReportCreatePage";
import ReportPage from "../../pages/ReportPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/teams",
      element: <TeamsPage />,
    },
    {
      path: "/reports",
      element: <ReportOverViewPage />,
    },
    {
      path: "/reports/create",
      element: <ReportCreatePage />,
    },
    {
      path: "/reports/:reportId",
      element: <ReportPage />,
    },
    {
      path: "/template/create",
      element: <ReportTemplateEditPage />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
