import { useEffect, useState } from "react";
import { formatLocalDate } from "../../utils";
import ReportStatus from "../ReportStatus";

type ReportCardProps = {
  report: any;
};

export default function ReportCard(props: ReportCardProps) {
  const { report } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function renderRelatedMembers() {
    const numberOfMembers = 2;

    if (windowWidth < 640) {
      const members = Array.from({ length: numberOfMembers })
        .map(() => "john")
        .join(", ");

      return <p>{members}</p>;
    }

    return Array.from({ length: numberOfMembers }).map((_, index) => (
      <div key={index} className="flex items-center gap-2">
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
    <div className="group rounded-md border border-slate-200 bg-white p-3 hover:border-indigo-700 hover:bg-indigo-50 sm:p-4">
      <div className="flex items-baseline justify-between sm:gap-4">
        <div>
          <small className="text-slate-600 sm:hidden">
            {formatLocalDate(new Date(report.created_at))}
          </small>
          <p className="text-base font-semibold">{report.name}</p>
        </div>
        <ReportStatus status={report.status} />
      </div>
      <div className="mt-2 flex items-center gap-6">
        {renderRelatedMembers()}
      </div>
    </div>
  );
}
