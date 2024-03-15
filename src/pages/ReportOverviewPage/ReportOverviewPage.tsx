import { FaPlus } from "react-icons/fa6";
import reportsData from "../../fake-data/reports.json";
import Layout from "../../components/Layout";
import ReportCard from "../../components/ReportCard";

export default function ReportOverviewPage() {
  return (
    <Layout>
      <div className="grid gap-4 border-l-slate-100 py-12 sm:border-l">
        <div className="flex justify-end gap-4">
          <button className="flex items-center gap-2 rounded-md bg-indigo-950 px-3 py-2 font-bold text-white">
            <FaPlus />
            <span>nieuw verslag</span>
          </button>
        </div>
        {reportsData.map((report, index) => (
          <div className="sm:-ml-[6.5px] sm:grid sm:grid-cols-[200px_1fr] sm:items-baseline">
            <div className="hidden items-center gap-3 sm:flex">
              <span className="block h-3 w-3 rounded-full bg-indigo-200" />
              <p>{new Date().toLocaleDateString().replace(/\//g, "-")}</p>
            </div>
            <ReportCard key={index} report={report} />
          </div>
        ))}
      </div>
    </Layout>
  );
}