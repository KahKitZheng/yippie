import {
  useEditor,
  EditorContent,
  JSONContent,
  BubbleMenu,
} from "@tiptap/react";
import Link from "@tiptap/extension-link";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "./TipTap.scss";

type TipTapProps = {
  variant: "editor" | "editor-title";
  content: JSONContent;
  updateContent?: (content: JSONContent) => void;
  placeholder?: string;
  isEditing?: boolean;
};

export default function TipTap(props: TipTapProps) {
  const {
    variant = "editor",
    content,
    updateContent,
    placeholder,
    isEditing = true,
  } = props;

  const editor = useEditor({
    content: Object.keys(content).length === 0 ? "" : content,
    editable: isEditing,
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Document.extend({
        content: variant === "editor-title" ? "heading block*" : undefined,
      }),
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
        class: `prose ${isEditing ? "editing" : ""}`,
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
