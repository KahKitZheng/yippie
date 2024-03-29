import TipTap from "../TipTap";
import { FaGripVertical, FaXmark } from "react-icons/fa6";
import { JSONContent } from "@tiptap/react";
import { ReportData } from "../../pages/ReportTemplateEditPage/ReportTemplateEditPage";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { randomId } from "../../utils";
import { motion } from "framer-motion";

type ReportItemEditorProps = {
  data: ReportData;
  isDragged?: boolean;
  removeQuestion: (id: string) => void;
  updateQuestion: (index: number, content: JSONContent) => void;
  isAnimated?: boolean;
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
    <motion.div
      ref={setNodeRef}
      className="-mx-8 flex items-center gap-4"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: dragOpacity() }}
      exit={{ opacity: 0 }}
      transition={{
        delay: props.isAnimated ? 0 : data.order * 0.1,
        duration: 0.3,
      }}
    >
      <button {...listeners} {...attributes}>
        <FaGripVertical />
      </button>
      <TipTap
        content={data.question.data}
        updateContent={(content: JSONContent) => updateQuestion(index, content)}
        variant={index === 0 ? "editor-title" : "editor"}
        placeholder={data.question.placeholder}
      />
      <button onClick={() => removeQuestion(data.id)}>
        <FaXmark />
      </button>
    </motion.div>
  );
}
