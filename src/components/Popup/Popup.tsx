import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Popup(props: PopupProps) {
  const { isOpen, onClose, title, children } = props;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed left-0 top-0 z-20 h-full w-full">
      <div className="absolute inset-0 bg-black opacity-60" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 z-30 w-96 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white">
        <header className="flex justify-between gap-4 px-6 pt-6">
          <p className="text-xl font-bold">{title}</p>
          <button className="text-xl" onClick={onClose}>
            <IoClose />
          </button>
        </header>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  ) : null;
}
