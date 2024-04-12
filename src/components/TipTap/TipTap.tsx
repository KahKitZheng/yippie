import {
  useEditor,
  EditorContent,
  JSONContent,
  BubbleMenu,
} from "@tiptap/react";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "./TipTap.scss";

type TipTapProps = {
  content: JSONContent;
  updateContent?: (content: JSONContent) => void;
  styleVariant?: "preview-question" | "edit-question" | "";
  placeholder?: string;
  isEditing?: boolean;
};

export default function TipTap(props: TipTapProps) {
  const {
    styleVariant,
    content,
    updateContent,
    placeholder,
    isEditing = true,
  } = props;

  const editor = useEditor({
    content: Object.keys(content).length === 0 ? "" : content,
    editable: isEditing,
    extensions: [
      StarterKit.configure(),
      Placeholder.configure({
        placeholder: placeholder ?? "",
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    onUpdate: ({ editor }) => {
      if (typeof updateContent !== "function") {
        return;
      } else {
        return updateContent(editor?.getJSON());
      }
    },
    editorProps: {
      attributes: {
        class: `prose ${isEditing ? "editing" : ""} ${styleVariant}`,
      },
    },
  });

  return (
    <>
      <EditorContent editor={editor} className="tiptap-editor" />
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          This is the bubble menu
        </BubbleMenu>
      )}
    </>
  );
}
