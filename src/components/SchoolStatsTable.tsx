import React from 'react';
import getLogoSrc from '../utils/getLogo';

interface SchoolStat {
  school: string;
  averageStat: number;
  isTop33Percent: boolean;
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
            <tr key={item.school} className={`${item.school == 'Nebraska' ?  '!border-4 !border-red-500' : ''}`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center">
                <img
                  src={getLogoSrc(item.school)}
                  alt={`${item.school} logo`}
                  className='h-6 w-6 mr-2'
                />
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