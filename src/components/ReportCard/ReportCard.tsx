import { useEffect, useState } from "react";

type ReportCardProps = {
  report: any;
};

export default function ReportCard(props: ReportCardProps) {
  const { report } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function translateStatus() {
    const status = report.status;
    switch (status) {
      case "draft":
        return "Concept";
      case "submitted":
        return "Gepubliceerd";
      case "approved":
        return "Goedgekeurd";
      case "rejected":
        return "Afgekeurd";
      default:
        return "Onbekend";
    }
  }

  function statusStyle() {
    const status = report.status;

    switch (status) {
      case "draft":
        return "bg-neutral-300";
      case "submitted":
        return "bg-sky-300";
      case "approved":
        return "bg-emerald-300";
      case "rejected":
        return "bg-rose-300";
      default:
        return "bg-neutral-300";
    }
  }

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
        <span className="hidden h-4 w-4 place-content-center rounded-full border border-indigo-200 bg-indigo-100 p-3 text-indigo-900 sm:grid">
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
    <div className="group grid gap-4 rounded-md border border-slate-200 p-3 hover:border-indigo-700 hover:bg-indigo-50 sm:p-4">
      <div className="flex items-baseline justify-between sm:gap-4">
        <p className="text-base font-semibold">{report.name}</p>
        <p className="inline-flex items-center gap-2 sm:justify-end">
          <span className={`${statusStyle()} h-[10px] w-[10px] rounded-full`} />
          <span className="hidden sm:inline">{translateStatus()}</span>
        </p>
      </div>

      <div className="flex items-center gap-6">{renderRelatedMembers()}</div>
    </div>
  );
}
