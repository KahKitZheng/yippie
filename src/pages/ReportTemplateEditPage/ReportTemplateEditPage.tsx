import Layout from "../../components/Layout";
import SortableReportItemList from "../../components/SortableReportItemList";
import { useEffect, useMemo, useState } from "react";
import { JSONContent } from "@tiptap/react";
import { FaPlus } from "react-icons/fa6";
import { randomId } from "../../utils";
import { motion } from "framer-motion";

export type ReportData = {
  id: string;
  order: number;
  question: { placeholder: string; data: JSONContent };
  answer: { placeholder: string; data: JSONContent };
};

export default function ReportTemplateEditPage() {
  // Need to place the hardcoded data inside the component, otherwise it won't reset properly
  const baseTemplate: ReportData[] = [
    {
      id: "z3pjWB6Utn",
      order: 0,
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
      order: 1,
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
      order: 2,
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
      order: 3,
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
  const [isAnimated, setIsAnimated] = useState(false);

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

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <Layout includePadding>
      <div className="relative grid gap-8">
        <SortableReportItemList
          items={report.sort((a, b) => a.order - b.order)}
          itemIds={itemIds}
          onDragEnd={setReport}
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
          isAnimated={isAnimated}
        />
      </div>
      <motion.button
        className="mx-auto mt-8 flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-2"
        onClick={addQuestion}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: (report.length + 1) * 0.1 }}
      >
        <FaPlus />
        vraag toevoegen
      </motion.button>

      <motion.button
        className="mx-auto mt-16 flex w-60 items-center justify-center rounded bg-indigo-950 p-3 font-medium text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: (report.length + 2) * 0.1 }}
      >
        opslaan
      </motion.button>
    </Layout>
  );
}
