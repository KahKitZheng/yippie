import Layout from "../../components/Layout";
import TipTap from "../../components/TipTap";
import { reportSubmitData } from "./fake-report-submit-data";

export default function ReportSubmitPage() {
  return (
    <Layout includePadding>
      <div className="relative grid gap-8">
        {reportSubmitData.map((tiptapEditor, index) => (
          <div className="overflow-hidden rounded-[6px] focus-within:outline focus-within:outline-2 focus-within:outline-indigo-400">
            <TipTap
              styleVariant={index > 0 ? "preview-question" : ""}
              content={tiptapEditor.question.data}
              isEditing={false}
            />
            {index !== 0 && (
              <TipTap
                styleVariant={index > 0 ? "edit-question" : ""}
                content={tiptapEditor.answer.data}
                isEditing
              />
            )}
          </div>
        ))}
      </div>

      <button className="mx-auto mt-16 flex w-60 items-center justify-center rounded bg-indigo-950 p-3 font-medium text-white">
        opslaan
      </button>
    </Layout>
  );
}
