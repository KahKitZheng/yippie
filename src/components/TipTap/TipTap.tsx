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
import { useEffect } from "react";

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
    content: "",
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
      if (updateContent === undefined) {
        return;
      }

      updateContent(editor?.getJSON());
    },
    editorProps: {
      attributes: {
        class: `prose ${isEditing ? "editing" : ""}`,
      },
    },
  });

  useEffect(() => {
    if (Object.keys(content).length === 0) {
      return;
    }

    editor?.commands.setContent(content);
  }, [content, editor]);

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
