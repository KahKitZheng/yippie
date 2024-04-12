import TipTap from "../TipTap";
import { FaGripVertical, FaXmark } from "react-icons/fa6";
import { JSONContent } from "@tiptap/react";
import { ReportData } from "../../pages/ReportTemplateEditPage/ReportTemplateEditPage";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { randomId } from "../../utils";

type ReportItemEditorProps = {
  data: ReportData;
  isDragged?: boolean;
  removeQuestion: (id: string) => void;
  updateQuestion: (index: number, content: JSONContent) => void;
  isFirstItem?: boolean;
};

export default function ReportItemEditor(props: ReportItemEditorProps) {
  const { isDragged = false, data, removeQuestion, updateQuestion } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    activeIndex,
    index,
  } = useSortable({ id: data.id || randomId() });

  function dragOpacity() {
    if (isDragged) {
      return 0;
    }
    if (index >= 0 && activeIndex === index) {
      return 0.5;
    }
    return 1;
  }

  return (
    <div
      ref={setNodeRef}
      className="-mx-8 flex items-center gap-4"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: dragOpacity(),
      }}
    >
      <button {...listeners} {...attributes}>
        <FaGripVertical />
      </button>
      <TipTap
        content={data.question.data}
        updateContent={(content: JSONContent) => updateQuestion(index, content)}
        placeholder={data.question.placeholder}
      />
      <button onClick={() => removeQuestion(data.id)}>
        <FaXmark />
      </button>
    </div>
  );
}
