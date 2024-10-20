import React from 'react';

const DriveAnalysis = () => {
  // Sample data
  const plays = {
    'UTEP': ['TD', 'DOWNS', 'PUNT', 'FUMBLE', 'TD', 'TD', 'TD', 'TD', 'FG', 'DOWNS', 'PUNT'], 
    'Colorado': ['TD', 'PUNT', 'MISSED FG', 'TD', 'PUNT', 'TD', 'PUNT', 'PUNT', 'PUNT', 'PUNT', 'PUNT', 'END OF GAME'], 
    'Northern Iowa': ['TD', 'TD', 'TD', 'DOWNS', 'FG', 'FG', 'INT', 'TD', 'END OF GAME'], 
    'Illinois': ['PUNT', 'FG', 'TD', 'INT', 'TD', 'PUNT', 'TD', 'PUNT', 'MISSED FG', 'END OF 4TH QUARTER', 'Uncategorized'], 
    'Purdue': ['PUNT', 'MISSED FG', 'PUNT', 'MISSED FG', 'PUNT', 'MISSED FG', 'TD', 'TD', 'TD', 'END OF 4TH QUARTER'], 
    'Rutgers': ['PUNT', 'TD', 'PUNT', 'INT', 'TD', 'PUNT', 'PUNT', 'PUNT', 'PUNT', 'PUNT', 'PUNT', 'END OF 4TH QUARTER'],
    'Indiana': ['PUNT', 'FUMBLE', 'TD', 'PUNT', 'PUNT', 'INT', 'INT', 'DOWNS', 'FUMBLE', 'INT', 'DOWNS']
  }


  
  // Helper function to determine the background color based on category and event
  const getBgColor = (category:any, event:any) => {
    switch (category) {
      case 'scoring':
        if (event === 'TD') return 'bg-[#E41C38]'; // Red
        if (event === 'FG') return 'bg-yellow-400';
        return 'bg-gray-300';
      case 'turnover':
        if (event === 'FUMBLE' || event === 'FUMBLE RETURN TD') return 'bg-[#800080]';
        if (event === 'INT') return 'bg-[#0000ff]'; // Blue
        if (event === 'MISSED FG') return 'bg-[#DDA0DD]'; // Approximating 'plum' with purple-400
        if (event === 'Safety') return 'bg-black';
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  // Helper function to render rows for a given category
  const renderRows = (category:any) => {
    return Object.entries(plays).map(([team, drives]) => {
      return (
        <div className="flex items-center gap-1 mb-4" key={`${category}-${team}`}>
          <div className="w-20 font-bold">{team}</div>
          {drives.map((event, index) => {
            const bgColor = getBgColor(category, event);
            return (
              <div
                key={index}
                className={`w-8 h-8 ${bgColor} border border-gray-300`}
                title={event}
              ></div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="font-sans p-8 flex flex-col items-center min-h-screen space-y-12">
      {/* Scoring Section */}
      <div className="w-full max-w-4xl">
        <div className="font-bold mb-2">Husker Offensive Drives in 2024 (Scoring)</div>
        <div className="mb-4">
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-[#E41C38] border border-gray-300 mr-1"></div>
                <span className="text-black">Red is a TD</span>
            </div>
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow-400 border border-gray-300 mr-1"></div>
                <span className="text-black">Yellow is FG</span>
            </div>
        </div>
        <div>{renderRows('scoring')}</div>
      </div>

      {/* Turnovers Section */}
      <div className="w-full max-w-4xl">
        <div className="font-bold mb-2">Husker Offensive Drives in 2024 (Turnovers)</div>
        <div className="mb-4">
        <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-[#0000ff] border border-gray-300 mr-1"></div>
            <span className="text-black">Blue is an INT</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-[#800080] border border-gray-300 mr-1"></div>
            <span className="text-black">Purple is Fumble</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-black border border-gray-300 mr-1"></div>
            <span className="text-black">Black is a Safety</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-[#DDA0DD] border border-gray-300 mr-1"></div>
            <span className="text-black">Plum is a Missed FG</span>
          </div>
        </div>
        <div>{renderRows('turnover')}</div>
      </div>
    </div>
  );
};


export default DriveAnalysis;
