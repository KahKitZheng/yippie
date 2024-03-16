import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Layout from "../../components/Layout";
import reportsData from "../../fake-data/reports.json";
import NewReportPopup from "../../components/Popup/NewReportPopup";
import ReportCard from "../../components/ReportCard";
import Button from "../../components/Button/Button";
import { formatLocalDate } from "../../utils";

export default function ReportOverviewPage() {
  const [newTemplatePopup, setNewTemplatePopup] = useState(false);

  return (
    <Layout>
      <div className="grid gap-4 border-l-slate-200 py-12 sm:border-l">
        <div className="flex justify-end gap-4">
          <Button callback={() => setNewTemplatePopup(true)}>
            <FaPlus />
            <span>nieuw verslag</span>
          </Button>
        </div>
        {reportsData.map((report, index) => (
          <div
            key={index}
            className="sm:-ml-[6.5px] sm:grid sm:grid-cols-[200px_1fr] sm:items-baseline"
          >
            <div className="hidden items-center gap-3 sm:flex">
              <span className="block h-3 w-3 rounded-full bg-indigo-200" />
              <p>{formatLocalDate(new Date())}</p>
            </div>
            <ReportCard key={index} report={report} />
          </div>
        ))}
      </div>

      <NewReportPopup
        isOpen={newTemplatePopup}
        onClose={() => setNewTemplatePopup(false)}
      />
    </Layout>
  );
}
