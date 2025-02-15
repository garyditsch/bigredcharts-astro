import React from "react";

const DraftHeatmap = () => {
  const draftYears = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const teams = ["Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "Wisconsin"];
  const draftCounts = [
    [4, 4, 0, 0, 3, 1, 0, 1, 0, 2, 3, 4, 4],
    [0, 0, 2, 1, 3, 1, 2, 1, 1, 1, 1, 0, 0],
    [6, 1, 3, 3, 1, 4, 3, 4, 5, 4, 2, 4, 4],
    [0, 0, 0, 2, 3, 0, 2, 4, 2, 1, 2, 5, 2],
    [3, 2, 3, 3, 3, 11, 2, 5, 10, 8, 5, 9, 13],
    [6, 3, 1, 4, 5, 2, 1, 2, 2, 0, 4, 3, 1],
    [0, 0, 2, 4, 2, 1, 0, 1, 5, 2, 4, 3, 1],
    [4, 2, 3, 3, 4, 1, 1, 0, 2, 2, 3, 2, 0],
    [2, 0, 0, 2, 2, 2, 1, 1, 0, 3, 0, 4, 0],
    [4, 3, 6, 5, 12, 7, 7, 9, 10, 10, 6, 6, 4],
    [4, 4, 3, 3, 5, 1, 6, 6, 5, 6, 8, 6, 8],
    [2, 1, 2, 1, 1, 1, 1, 0, 2, 2, 3, 5, 2],
    [0, 0, 0, 2, 1, 0, 2, 2, 0, 0, 2, 1, 1],
    [6, 3, 5, 2, 2, 3, 5, 4, 4, 3, 5, 3, 2]
  ];

  // Function to determine cell color based on draft count
  const getColor = (count: any) => {
    if (count === 0) return "bg-red-50"; 
    if (count === 1) return "bg-red-100"; 
    if (count === 2) return "bg-red-200"; 
    if (count === 3) return "bg-red-300"; 
    if (count === 4) return "bg-red-400"; 
    if (count === 5) return "bg-red-500"; 
    if (count === 6) return "bg-red-600 text-white"; 
    if (count === 7) return "bg-red-700 text-white"; 
    if (count === 8) return "bg-red-800 text-white"; 
    if (count === 9) return "bg-red-900 text-white"; 
    if (count <= 10) return "bg-red-950 text-white"; 
    return "bg-red-950 text-white"; // Very dark blue for highest values
  };

  return (
    <div className="w-full p-4">
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4">NFL Draft Picks by Year and School</h2>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-[150px_repeat(13,1fr)] gap-0.5">
          {/* Header Row - Years */}
          <div className="bg-gray-100"></div> {/* Empty space for alignment */}
          {draftYears.map((year) => (
            <div key={year} className="text-center font-semibold bg-gray-100 p-2">
              {year}
            </div>
          ))}

          {/* Heatmap Data */}
          {teams.map((team, rowIndex) => (
            <React.Fragment key={team}>
              {/* Team Name Column */}
              <div className="text-right pr-2 font-semibold bg-gray-100 p-2">{team}</div>
              {/* Draft Count Cells */}
              {draftCounts[rowIndex].map((count, colIndex) => (
                <div
                  key={`${team}-${draftYears[colIndex]}`}
                  className={`text-center font-bold p-2 ${getColor(count)}`}
                >
                  {count}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraftHeatmap;
