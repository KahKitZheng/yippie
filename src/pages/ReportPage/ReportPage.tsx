import { useState } from "react";
import { JSONContent } from "@tiptap/react";
import { useParams } from "react-router-dom";
import { reports } from "../../fake-data/reports";
import Layout from "../../components/Layout";
import TipTap from "../../components/TipTap";
import ReportStatus from "../../components/ReportStatus";
import { randomId } from "../../utils";
import { ReportData } from "../ReportTemplateEditPage/ReportTemplateEditPage";

type NoteData = {
  id: string;
  details: {
    placeholder: string;
    data: JSONContent;
  };
};

type Report = {
  author: string;
  created_at: string;
  data: ReportData[] | undefined;
  id: string;
  manager: string;
  name: string;
  status: string;
};

export default function ReportPage() {
  const { reportId } = useParams();

  const [report, setReport] = useState<Report | undefined>(
    reports.find((report) => report.id === reportId),
  );
  const [note, setNote] = useState({
    id: randomId(),
    details: {
      placeholder: "",
      data: {} as JSONContent,
    },
  } as NoteData);
  const [isReviewing, setIsReviewing] = useState(false);

  const updateTipTapContent = (index: number, content: JSONContent) => {
    const newReport = report?.data?.map((item, i) => {
      if (i === index) {
        return { ...item, answer: { ...item.answer, data: content } };
      }
      return item;
    });

    setReport({ ...report, data: newReport } as Report);
  };

  return (
    <Layout includePadding>
      <div className="relative grid gap-8">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h1 className="mb-1 text-3xl font-bold">Template name</h1>
            <p>John doe, Jane doe</p>
          </div>
          <ReportStatus status={report?.status || ""} />
        </div>

        {report?.data?.map((tiptapEditor, index) => (
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
              isEditing={report?.status === "draft"}
              styleVariant="edit-question"
              content={tiptapEditor.answer.data}
              updateContent={(content: JSONContent) =>
                updateTipTapContent(index, content)
              }
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
