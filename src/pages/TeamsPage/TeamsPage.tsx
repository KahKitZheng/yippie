import Layout from "../../components/Layout";
import teamData from "../../fake-data/teams.json";

export default function TeamsPage() {
  return (
    <Layout includePadding>
      <div className="space-y-12">
        {teamData.map((team) => (
          <div key={team.name}>
            <h2 className="mb-2 text-2xl font-bold">{team.name}</h2>
            <ul className="grid grid-cols-2 gap-2">
              {team.members.map((member, index) => (
                <li
                  key={index}
                  className="rounded-md border border-slate-200 p-4"
                >
                  <p className="text-base font-semibold">{member.name}</p>
                  <p className="text-neutral-500">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
