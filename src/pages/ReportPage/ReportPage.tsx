import { useState } from "react";
import Layout from "../../components/Layout";
import TipTap from "../../components/TipTap";
import { JSONContent } from "@tiptap/react";
import { FaPlus } from "react-icons/fa6";

type ReportData = {
  question: { placeholder: string; data: JSONContent };
  answer: { placeholder: string; data: JSONContent };
};

const baseTemplate: ReportData[] = [
  {
    question: {
      placeholder: "Verslag naam",
      data: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: {
              level: 1,
            },
            content: [
              {
                type: "text",
                text: "Team platform - Bila",
              },
            ],
          },
        ],
      },
    },
    answer: {
      placeholder: "",
      data: {} as JSONContent,
    },
  },
  {
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

export default function ReportPage() {
  const [report, setReport] = useState(baseTemplate);

  function updateField(index: number, content: Record<string, JSONContent>) {
    const copyReport = [...report];
    copyReport[index].question.data = content.question.data;

    setReport(copyReport);
  }

  function addQuestion() {
    const newQuestion: ReportData = {
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

  return (
    <Layout includePadding>
      <div className="grid gap-8">
        {report.map((data, index) => (
          <TipTap
            key={index}
            content={data.question.data}
            updateContent={() => updateField(index, data)}
            variant={index === 0 ? "editor-title" : "editor"}
            placeholder={data.question.placeholder}
          />
        ))}

        <button
          className="mx-auto mt-8 flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-2"
          onClick={addQuestion}
        >
          <FaPlus />
          vraag toevoegen
        </button>

        <button className="mx-auto mt-8 flex w-60 items-center justify-center rounded bg-indigo-950 p-3 font-medium text-white">
          opslaan
        </button>
      </div>
    </Layout>
  );
}
