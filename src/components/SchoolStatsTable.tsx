import React from 'react';

interface SchoolStat {
  school: string;
  averageStat: number;
}

interface SchoolStatsTableProps {
  data?: SchoolStat[];
}

const SchoolStatsTable: React.FC<SchoolStatsTableProps> = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              School
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Season Average
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.school} className={`${item.school == 'Nebraska' ? 'bg-red-600 text-white' : 'text-gray-900'}`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {item.school}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.averageStat.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolStatsTable;