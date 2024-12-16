import React, { useState } from 'react';

// {'id': 4569586, 
// 'first_name': 'Ty', 
// 'last_name': 'Robinson', 
// 'team': 'Nebraska', 
// 'height': 78.0, 
// 'weight': 310.0, 
// 'jersey': 9.0, 
// 'year': 4.0, 
// 'position': 'DL', 
// 'home_city': 'Gilbert', 
// 'home_state': 'AZ', 
// 'home_country': 'USA', 
// 'home_latitude': 33.3527632, 
// 'home_longitude': -111.7890373, 
// 'home_county_fips': '04013', 
// 'recruit_ids': array([46974], 
// dtype=int32)},


// Define the type for the data prop
interface Roster {
  id: number;
  first_name: string;
  last_name: string;
  team: string;
  height: any;
  weight: any;
  jersey: any;
  year: any;
  position: any;
  home_city: any;
  home_state: any;
  home_country: any;
}



interface PlayerTableWithFiltersProps {
  data: Roster[]; // Array of players passed as props
}

const RosterTableWithFilters: React.FC<PlayerTableWithFiltersProps> = ({ data }) => {
  const [yearFilter, setYearFilter] = useState<number>();
  const [lastNameFilter, setLastNameFilter] = useState<string>('');
  const [positionFilter, setPositionFilter] = useState<string>('')

  // Filter logic
  const filteredData = data.filter((player) => {
    const matchesYear = yearFilter ? player.year === yearFilter : true; // Exact match for game
    const matchesLastName = lastNameFilter
      ? player.last_name.toLowerCase().includes(lastNameFilter.toLowerCase())
      : true;
    const matchesPosition = positionFilter
      ? player.position.toLowerCase().includes(positionFilter.toLowerCase())
      : true;
    return matchesYear && matchesLastName && matchesPosition;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row space-x-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Filter by Year (leave empty for all)
          </label>
          <input
            type="number"
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Enter value (1, 2, 3, 4)"
            value={yearFilter !== undefined ? yearFilter : ''}
            onChange={(e) =>
              setYearFilter(e.target.value ? parseInt(e.target.value, 10) : undefined)
            }
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Filter by Position
          </label>
          <input
            type="text"
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Enter position"
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value)}
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
            </tr>
          </thead>
          <tbody>
            {filteredData.map((player, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{player.first_name}</td>
                <td className="px-4 py-2">{player.last_name}</td>
                <td className="px-4 py-2">{player.year}</td>
                <td className="px-4 py-2">{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RosterTableWithFilters;
