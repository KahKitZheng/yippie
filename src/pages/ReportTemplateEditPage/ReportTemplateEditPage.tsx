import Layout from "../../components/Layout";
import SortableReportItemList from "../../components/SortableReportItemList";
import { useMemo, useState } from "react";
import { JSONContent } from "@tiptap/react";
import { FaPlus } from "react-icons/fa6";
import { randomId } from "../../utils";
import { createReportTemplate } from "../../fake-data/create-report-template";

export type ReportData = {
  id: string;
  order: number;
  question: { placeholder: string; data: JSONContent };
  answer: { placeholder: string; data: JSONContent };
};

export default function ReportTemplateEditPage() {
  const [report, setReport] = useState(createReportTemplate);
  const [templateName, setTemplateName] = useState("");

  const itemIds = useMemo(() => {
    return report.sort((a, b) => a.order - b.order).map((item) => item.id);
  }, [report]);

  function addQuestion() {
    const newQuestion: ReportData = {
      id: randomId(),
      order: report.length + 1,
      question: {
        placeholder: "What’s one thing you’ve always wanted to learn?",
        data: {} as JSONContent,
      },
      answer: {
        placeholder: "",
        data: {} as JSONContent,
      },
    };

    setReport([...report, newQuestion]);
  }

  function updateQuestion(index: number, content: JSONContent) {
    const copyReport = [...report];
    copyReport[index].question.data = content;

    setReport(copyReport);
  }

  function removeQuestion(id: string) {
    const cleanReport = report.filter((data) => data.id !== id);

    setReport(cleanReport);
  }

  return (
    <Layout includePadding>
      <div className="relative grid gap-8">
        <input
          type="text"
          className="rounded-[6px] border border-slate-200 p-4 text-3xl font-bold placeholder:text-slate-400"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          placeholder="Template name"
        />
        <SortableReportItemList
          items={report.sort((a, b) => a.order - b.order)}
          itemIds={itemIds}
          onDragEnd={setReport}
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
        />
      </div>
      <button
        className="mx-auto mt-8 flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-2"
        onClick={addQuestion}
      >
        <FaPlus />
        vraag toevoegen
      </button>

      <button className="mx-auto mt-16 flex w-60 items-center justify-center rounded bg-indigo-950 p-3 font-medium text-white">
        opslaan
      </button>
    </Layout>
  );
}
