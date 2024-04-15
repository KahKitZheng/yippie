import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReportOverViewPage from "../../pages/ReportOverviewPage";
import ReportTemplateEditPage from "../../pages/ReportTemplateEditPage";
import TeamsPage from "../../pages/TeamsPage";
import PageNotFound from "../../pages/404/PageNotFound";
import ReportCreatePage from "../../pages/ReportCreatePage";
import ReportPage from "../../pages/ReportPage";
import UserContextProvider from "../../context/UserContext";

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

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
