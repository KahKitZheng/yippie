type ButtonProps = {
  children: React.ReactNode;
  callback: () => void;
};

export default function Button(props: ButtonProps) {
  const { children, callback } = props;

  return (
    <button
      className="flex items-center gap-2 rounded-md bg-indigo-950 px-3 py-[6px] font-bold text-white"
      onClick={callback}
    >
      {children}
    </button>
  );
}
