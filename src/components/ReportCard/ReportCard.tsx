import { useEffect, useState } from "react";

export default function ReportCard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function renderRelatedMembers() {
    const numberOfMembers = 2;

    if (windowWidth < 640) {
      const members = Array.from({ length: numberOfMembers })
        .map(() => "john")
        .join(", ");

      return <p>{members}</p>;
    }

    return Array.from({ length: numberOfMembers }).map((_) => (
      <div className="flex items-center gap-2">
        <span className="hidden h-4 w-4 place-content-center rounded-full bg-neutral-200 p-3 text-sm sm:grid">
          J
        </span>
        <p>John doe</p>
      </div>
    ));
  }

  useEffect(() => {
    const handleResize = () => {
      return setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid gap-4 rounded-md border border-slate-200 p-3 hover:border-black sm:p-4">
      <div className="flex items-baseline justify-between sm:gap-4">
        <p className="text-base font-bold">Bila gesprek John</p>
        <p className="inline-flex items-center gap-2 sm:justify-end">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="hidden sm:inline">Goedgekeurd</span>
        </p>
      </div>

      <div className="flex items-center gap-6">{renderRelatedMembers()}</div>
    </div>
  );
}
