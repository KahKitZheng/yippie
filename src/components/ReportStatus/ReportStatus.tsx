type ReportStatusProps = {
  status: string;
};

export default function ReportStatus(props: ReportStatusProps) {
  const { status } = props;

  function translateStatus() {
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

  return (
    <p className="inline-flex items-center gap-2 sm:justify-end">
      <span className={`${statusStyle()} h-[10px] w-[10px] rounded-full`} />
      <span className="hidden sm:inline">{translateStatus()}</span>
    </p>
  );
}
