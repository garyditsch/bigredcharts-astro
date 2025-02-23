import { useEffect, useState } from "react";

type Team = {
  college_team: string;
  draft_picks: number;
  rank: number;
};

const TopFiftyDraftTable: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]); // Explicitly set type

  useEffect(() => {
    fetch("/data/top_fifty_draft.json")  // Fetch static JSON from public folder
      .then((res) => res.json())
      .then((data: Team[]) => setTeams(data))  // Explicitly tell TypeScript it's an array of teams
      .catch(error => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="w-1/2 p-4">
      {/* <h2 className="text-2xl font-bold text-center mb-1">Top Fifty Colleges based on NFL Draft Picks</h2>
      <h3 className="text-md text-center mb-4">2012 - 2024 (Since Nebraska joined the Big Ten)</h3> */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-2 border">Rank</th>
              <th className="p-2 border">School</th>
              <th className="p-2 border">Draft Picks</th>
            </tr>
          </thead>
          <tbody>
            {teams.length > 0 ? (
              teams.map((team, index) => (
                <tr 
                    key={index}
                    className={`text-center border-b hover:bg-gray-100 ${
                        team.college_team.toLowerCase() === 'nebraska' ? 'bg-red-500' : ''
                      }`}
                >
                  <td className="p-2 border">{team.rank}</td>
                  <td className="p-2 border">{team.college_team}</td>
                  <td className="p-2 border">{team.draft_picks}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="text-center p-4">Loading data...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopFiftyDraftTable;

