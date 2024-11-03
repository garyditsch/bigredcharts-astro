import React from 'react';

// Define the type for the data prop
interface PlayerData {
  first_name: string;
  last_name: string;
  year: number;
  position: string;
  snaps: number;
  season: number;
  game: string;
}

interface PlayerTableProps {
  data: PlayerData[];
}

const PlayerTable: React.FC<PlayerTableProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Position</th>
            <th className="px-4 py-2 text-left">Snaps</th>
            <th className="px-4 py-2 text-left">Season</th>
            <th className="px-4 py-2 text-left">Game</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{player.first_name}</td>
              <td className="px-4 py-2">{player.last_name}</td>
              <td className="px-4 py-2">{player.year}</td>
              <td className="px-4 py-2">{player.position}</td>
              <td className="px-4 py-2">{player.snaps}</td>
              <td className="px-4 py-2">{player.season}</td>
              <td className="px-4 py-2">{player.game}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
