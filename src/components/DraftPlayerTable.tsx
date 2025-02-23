import { useEffect, useState } from "react";

type Player = {
  college_team: string;
  college_conference: string;
  nfl_team: string;
  year: number;
  overall: number;
  round: number;
  pick: number;
  name: string;
  position: string;
  pre_draft_ranking: number;
  pre_draft_position_ranking: number;
  pre_draft_grade: number;
};

const DraftTable: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]); // Explicitly set type

  useEffect(() => {
    fetch("/data/neb_draft.json")  // Fetch static JSON from public folder
      .then((res) => res.json())
      .then((data: Player[]) => setPlayers(data))  // Explicitly tell TypeScript it's an array of Players
      .catch(error => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="w-full p-4">
      {/* <h2 className="text-2xl font-bold text-center mb-4">NFL Draft Picks</h2> */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-2 border">Year</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">College</th>
              <th className="p-2 border">NFL Team</th>
              <th className="p-2 border">Overall</th>
              <th className="p-2 border">Round</th>
              <th className="p-2 border">Pick</th>
              <th className="p-2 border">Position</th>
              <th className="p-2 border">Conference</th>
              <th className="p-2 border">Ranking</th>
              <th className="p-2 border">Position Rank</th>
              <th className="p-2 border">Draft Grade</th>
            </tr>
          </thead>
          <tbody>
            {players.length > 0 ? (
              players.map((player, index) => (
                <tr key={index} className="text-center border-b hover:bg-gray-100">
                  <td className="p-2 border">{player.year}</td>
                  <td className="p-2 border">{player.name}</td>
                  <td className="p-2 border">{player.college_team}</td>
                  <td className="p-2 border">{player.nfl_team}</td>
                  <td className="p-2 border">{player.overall}</td>
                  <td className="p-2 border">{player.round}</td>
                  <td className="p-2 border">{player.pick}</td>
                  <td className="p-2 border">{player.position}</td>
                  <td className="p-2 border">{player.college_conference}</td>
                  <td className="p-2 border">{player.pre_draft_ranking}</td>
                  <td className="p-2 border">{player.pre_draft_position_ranking}</td>
                  <td className="p-2 border">{player.pre_draft_grade}</td>
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

export default DraftTable;

