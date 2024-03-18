import { EditorProvider, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "./TipTap.css";

type TipTapProps = {
  content: string;
  editable?: boolean;
  placeholder?: string;
};

export default function TipTap(props: TipTapProps) {
  const { content, editable = true } = props;

  const extensions = [
    StarterKit,
    Placeholder.configure({ placeholder: "Type something" }),
  ];

  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      editable={editable}
    >
      <BubbleMenu>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
}
