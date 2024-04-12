import { type JSONContent } from "@tiptap/react";
import { ReportData } from "../pages/ReportTemplateEditPage/ReportTemplateEditPage";

export const createReportTemplate: ReportData[] = [
  {
    id: "khAN2qUjMb",
    order: 0,
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
    order: 1,
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
    order: 2,
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
