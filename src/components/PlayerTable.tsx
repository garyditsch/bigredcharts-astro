import React, { useState } from 'react';


// Define the type for the data prop
interface Player {
  first_name: string;
  last_name: string;
  year: number;
  position: string;
  snaps: number;
  season: number;
  game: string;
}

interface PlayerTableProps {
  data: Player[]; // Array of players passed as props
}

const PlayerTable: React.FC<PlayerTableProps> = ({ data }) => {
  const [gameFilter, setGameFilter] = useState<string>('');
  const [lastNameFilter, setLastNameFilter] = useState<string>('');

  // Filter logic
  const filteredData = data.filter((player) => {
    const matchesGame = gameFilter ? player.game === gameFilter : true; // Exact match for game
    const matchesLastName = lastNameFilter
      ? player.last_name.toLowerCase().includes(lastNameFilter.toLowerCase())
      : true;
    return matchesGame && matchesLastName;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row space-x-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Filter by Game
          </label>
          <input
            type="text"
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Enter game name"
            value={gameFilter}
            onChange={(e) => setGameFilter(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Filter by Last Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Enter last name"
            value={lastNameFilter}
            onChange={(e) => setLastNameFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Player Table */}
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
            {filteredData.map((player, index) => (
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
    </div>
  );
};

export default PlayerTable;
