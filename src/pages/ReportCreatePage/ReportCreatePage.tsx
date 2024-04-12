import { useState } from "react";
import { createReport } from "../../fake-data/create-report";
import { JSONContent } from "@tiptap/react";
import { randomId } from "../../utils";
import Layout from "../../components/Layout";
import TipTap from "../../components/TipTap";
import ReportStatus from "../../components/ReportStatus";

export default function ReportCreatePage() {
  const [report, setReport] = useState({
    name: "Template name",
    data: createReport,
    status: "draft",
    manager: "John doe",
    author: "Jane doe",
    created_at: "01-01-1970",
    id: randomId(),
  });

  const updateTipTapContent = (index: number, content: JSONContent) => {
    const newReport = report?.data?.map((item, i) => {
      if (i === index) {
        return { ...item, answer: { ...item.answer, data: content } };
      }
      return item;
    });

    setReport({ ...report, data: newReport });
  };

  return (
    <Layout includePadding>
      <div className="relative grid gap-8">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h1 className="mb-1 text-3xl font-bold">Template name</h1>
            <p>John doe, Jane doe</p>
          </div>
          <ReportStatus status={report.status} />
        </div>

        {report.data?.map((tiptapEditor, index) => (
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
              isEditing={report.status === "draft"}
              styleVariant="edit-question"
              content={tiptapEditor.answer.data}
              updateContent={(content: JSONContent) =>
                updateTipTapContent(index, content)
              }
            />
          </div>
        ))}
      </div>

      {report.status === "draft" ? (
        <button className="mx-auto mt-16 flex w-60 items-center justify-center rounded bg-indigo-950 p-3 font-medium text-white">
          opslaan
        </button>
      ) : null}
    </Layout>
  );
}
