import { FaPlus } from "react-icons/fa6";
import Layout from "../../components/Layout";
import ReportCard from "../../components/ReportCard";

export default function HomePage() {
  const teamMembers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
  ];

  return (
    <Layout>
      <div className="grid gap-4 border-l-neutral-200 py-12 sm:border-l">
        <div className="-ml-[6.5px] grid grid-cols-[200px_1fr] items-baseline">
          <div></div>
          <div className="hidden items-center justify-between gap-4 sm:flex">
            <div className="relative isolate flex flex-row-reverse flex-wrap">
              {teamMembers
                // .splice(0, 5)
                .map((member, index) => (
                  <button
                    key={member}
                    className={`relative z-[${(teamMembers.length - index) * 10}] grid h-4 w-4 select-none place-content-center rounded-full border border-neutral-200 bg-white p-4 text-sm font-medium hover:z-[100] hover:border-black [&:not(:last-child)]:-ml-2`}
                  >
                    {member}
                  </button>
                ))
                .reverse()}
            </div>
            <button className="flex items-center gap-2 rounded-md bg-black px-3 py-2 font-bold text-white">
              <FaPlus />
              <span>nieuw verslag</span>
            </button>
          </div>
        </div>
        {Array.from({ length: 30 }).map((_, index) => (
          <div className="sm:-ml-[6.5px] sm:grid sm:grid-cols-[200px_1fr] sm:items-baseline">
            <div className="hidden items-center gap-3 sm:flex">
              <span className="block h-3 w-3 rounded-full bg-neutral-300" />
              <p>{new Date().toLocaleDateString().replace(/\//g, "-")}</p>
            </div>
            <ReportCard key={index} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
