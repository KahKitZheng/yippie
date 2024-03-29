import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReportOverViewPage from "../../pages/ReportOverviewPage";
import ReportTemplateEditPage from "../../pages/ReportTemplateEditPage";
import TeamsPage from "../../pages/TeamsPage";
import PageNotFound from "../../pages/404/PageNotFound";

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
      path: "/template/:reportId/edit",
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
