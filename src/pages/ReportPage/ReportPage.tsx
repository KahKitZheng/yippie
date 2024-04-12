import { useParams } from "react-router-dom";
import { reports } from "../../fake-data/reports";
import { randomId } from "../../utils";
import Layout from "../../components/Layout";
import TipTap from "../../components/TipTap";
import ReportStatus from "../../components/ReportStatus";

export default function ReportPage() {
  const { reportId } = useParams();
  const reportById = reports.find((report) => report.id === reportId) || {
    name: "",
    data: [],
    status: "draft",
    manager: "John doe",
    author: "Jane doe",
    created_at: "01-01-1970",
    id: randomId(),
  };

  return (
    <Layout includePadding>
      <div className="relative grid gap-8">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h1 className="mb-1 text-3xl font-bold">Template name</h1>
            <p>John doe, Jane doe</p>
          </div>
          <ReportStatus status={reportById.status} />
        </div>

        {reportById.data?.map((tiptapEditor) => (
          <div
            key={tiptapEditor.id}
            className="overflow-hidden rounded-[6px] focus-within:outline focus-within:outline-2 focus-within:outline-indigo-400"
          >
            <TipTap
              styleVariant="preview-question"
              content={tiptapEditor.question.data}
              isEditing={false}
            />
            <TipTap
              isEditing={false}
              styleVariant="edit-question"
              content={tiptapEditor.answer.data}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
