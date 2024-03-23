import Layout from "../../components/Layout";
import TipTap from "../../components/TipTap";
import { useState } from "react";
import { JSONContent } from "@tiptap/react";
import { FaGripVertical, FaPlus, FaXmark } from "react-icons/fa6";
import { randomId } from "../../utils";

type ReportData = {
  id: string;
  question: { placeholder: string; data: JSONContent };
  answer: { placeholder: string; data: JSONContent };
};

export default function ReportTemplateEditPage() {
  // Need to place the hardcoded data inside the component, otherwise it won't reset properly
  const baseTemplate: ReportData[] = [
    {
      id: "z3pjWB6Utn",
      question: {
        placeholder: "Template name",
        data: {} as JSONContent,
      },
      answer: {
        placeholder: "",
        data: {} as JSONContent,
      },
    },
    {
      id: "khAN2qUjMb",
      question: {
        placeholder: "What’s the best way to waste time?",
        data: {} as JSONContent,
      },
      answer: {
        placeholder: "",
        data: {} as JSONContent,
      },
    },
    {
      id: "fasKdyHh3c",
      question: {
        placeholder: "What’s your favorite playlist?",
        data: {} as JSONContent,
      },
      answer: {
        placeholder: "",
        data: {} as JSONContent,
      },
    },
    {
      id: "mi4Vdx4dM7",
      question: {
        placeholder: "What is one thing you think is really overrated?",
        data: {} as JSONContent,
      },
      answer: {
        placeholder: "",
        data: {} as JSONContent,
      },
    },
  ];

  const [report, setReport] = useState(baseTemplate);

  function addQuestion() {
    const newQuestion: ReportData = {
      id: randomId(),
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
      <div className="grid gap-8">
        {report.map((data, index) => (
          <div key={data.id} className="-mx-8 flex items-center gap-4">
            <button>
              <FaGripVertical />
            </button>
            <TipTap
              content={data.question.data}
              updateContent={(content: JSONContent) =>
                updateQuestion(index, content)
              }
              variant={index === 0 ? "editor-title" : "editor"}
              placeholder={data.question.placeholder}
            />
            <button onClick={() => removeQuestion(data.id)}>
              <FaXmark />
            </button>
          </div>
        ))}
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
