import React from 'react';

const NebraskaGameVisualization = () => {
  // Sample data
  const data = {
    2024: ["Nebraska", "Nebraska", "Nebraska", "Illinois", "Nebraska", "Nebraska"],
    2023: ["Minnesota", "Colorado", "Nebraska", "Nebraska", "Michigan", "Nebraska", "Nebraska", "Nebraska", "Michigan State", "Maryland", "Wisconsin", "Iowa"], 
    2022: ["Northwestern", "Nebraska", "Georgia Southern", "Oklahoma", "Nebraska", "Nebraska", "Purdue", "Illinois", "Minnesota", "Michigan", "Wisconsin", "Nebraska"],
    2021: ["Illinois", "Nebraska", "Nebraska", "Oklahoma", "Michigan State", "Nebraska", "Michigan", "Minnesota", "Purdue", "Ohio State", "Wisconsin", "Iowa"],
    2020: ["Ohio State", "Northwestern", "Nebraska", "Illinois", "Iowa", "Nebraska", "Minnesota", "Nebraska"],
    2019: ["Nebraska", "Colorado", "Nebraska", "Nebraska", "Ohio State", "Nebraska", "Minnesota", "Indiana", "Purdue", "Wisconsin", "Nebraska", "Iowa"],
    2018: ["Colorado", "Troy", "Michigan", "Purdue", "Wisconsin", "Northwestern", "Nebraska", "Nebraska", "Ohio State", "Nebraska", "Nebraska", "Iowa"],
    2017: ["Nebraska", "Oregon", "Northern Illinois", "Nebraska", "Nebraska", "Wisconsin", "Ohio State", "Nebraska", "Northwestern", "Minnesota", "Penn State", "Iowa"],
    2016: ["Nebraska", "Nebraska", "Nebraska", "Nebraska", "Nebraska", "Nebraska", "Nebraska", "Wisconsin", "Ohio State", "Nebraska", "Nebraska", "Iowa"],
    2015: ["BYU", "Nebraska", "Miami", "Nebraska", "Illinois", "Wisconsin", "Nebraska", "Northwestern", "Purdue", "Nebraska", "Nebraska", "Iowa"],
    2014: ["Nebraska", "Nebraska", "Nebraska", "Nebraska", "Nebraska", "Michigan State", "Nebraska", "Nebraska", "Nebraska", "Wisconsin", "Minnesota", "Nebraska"],
    2013: ["Nebraska", "Nebraska", "UCLA", "Nebraska", "Nebraska", "Nebraska", "Minnesota", "Nebraska", "Nebraska", "Michigan State", "Nebraska", "Iowa"],
    2012: ["Nebraska", "UCLA", "Nebraska", "Nebraska", "Nebraska", "Ohio State", "Nebraska", "Nebraska", "Nebraska", "Nebraska", "Nebraska", "Nebraska"]
};

  const wins = 5;

  // Helper function to count the number of Nebraska wins in each season
   const countWins = (games: string[]) => {
      return games.reduce((count, game) => {
      return game === 'Nebraska' ? count + 1 : count;
    }, 0);
  };
  

  // Helper function to render rows for each season
  const renderRows = () => {
    return Object.entries(data)
      .reverse()  // Reverse to show 2024 first
      .map(([year, games]) => {
        let count = 0;
        let foundSeasonWins = false;
        const winTotal = countWins(games);  // Count Nebraska wins for this season
  
        return (
          <div className="flex items-center gap-1 mb-4" key={year}>
            <div className="w-20 font-bold">
              {year}
            </div>
            {games.map((team, index) => {
              let bgColor = 'bg-gray-300'; // Default gray for losses
              
              if (team === 'Nebraska') {
                count++;
                bgColor = 'bg-red-500'; // Nebraska win
              }
  
              if (count === wins && !foundSeasonWins) {
                bgColor = 'bg-blue-500';  // Blue for matching 2024 win total
                foundSeasonWins = true;
              }
  
              return (
                <div
                  key={index}
                  className={`w-8 h-8 ${bgColor} border border-gray-300`}
                  title={team}
                ></div>
              );
            })} - {winTotal} Wins
          </div>
        );
      });
  };

  return (
    <div className="font-sans p-8 flex flex-col items-center min-h-screen space-y-12">
      <div className="w-full max-w-4xl">
        <div className="font-bold mb-2">Nebraska Regular Season Wins by Year</div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-red-500 border border-gray-300 mr-1"></div>
            <span className="text-black">Red is a Nebraska win</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-500 border border-gray-300 mr-1"></div>
            <span className="text-black">Blue is a win that matches the current 2024 win total</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-300 border border-gray-300 mr-1"></div>
            <span className="text-black">Gray is a loss</span>
          </div>
        </div>
        <div>{renderRows()}</div>
      </div>
    </div>
  );
};

export default NebraskaGameVisualization;

