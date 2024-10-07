import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Select from 'react-select';

const schoolOptions = [
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Indiana', label: 'Indiana' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Maryland', label: 'Maryland' },
  { value: 'Michigan', label: 'Michigan' },
  { value: 'Michigan State', label: 'Michigan State' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Nebraska', label: 'Nebraska' },
  { value: 'Northwestern', label: 'Northwestern' },
  { value: 'Ohio State', label: 'Ohio State' },
  { value: 'Oregon', label: 'Oregon' },
  { value: 'Penn State', label: 'Penn State' },
  { value: 'Purdue', label: 'Purdue' },
  { value: 'Rutgers', label: 'Rutgers' },
  { value: 'UCLA', label: 'UCLA' },
  { value: 'USC', label: 'USC' },
  { value: 'Washington', label: 'Washington' },
  { value: 'Wisconsin', label: 'Wisconsin' }
];

// Mock data
const allData = {
   Multi_School_RushTD: [{"game_id":401628489,"school":"Michigan","category":"rushingTDs","stat":3,"season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628489,"school":"USC","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628491,"school":"Washington","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628491,"school":"Northwestern","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628487,"school":"Iowa","category":"rushingTDs","stat":4,"season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628487,"school":"Minnesota","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628485,"school":"Illinois","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628485,"school":"Nebraska","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628500,"school":"Oregon","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628500,"home_team":"UCLA","away_team":"Oregon"},{"game_id":401628500,"school":"UCLA","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628500,"home_team":"UCLA","away_team":"Oregon"},{"game_id":401628502,"school":"Wisconsin","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628502,"home_team":"USC","away_team":"Wisconsin"},{"game_id":401628502,"school":"USC","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628502,"home_team":"USC","away_team":"Wisconsin"},{"game_id":401628496,"school":"Maryland","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628496,"home_team":"Indiana","away_team":"Maryland"},{"game_id":401628496,"school":"Indiana","category":"rushingTDs","stat":3,"season":2024,"game_id_from_results":401628496,"home_team":"Indiana","away_team":"Maryland"},{"game_id":401628498,"school":"Ohio State","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628498,"home_team":"Michigan State","away_team":"Ohio State"},{"game_id":401628498,"school":"Michigan State","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628498,"home_team":"Michigan State","away_team":"Ohio State"},{"game_id":401628497,"school":"Minnesota","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628497,"home_team":"Michigan","away_team":"Minnesota"},{"game_id":401628497,"school":"Michigan","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628497,"home_team":"Michigan","away_team":"Minnesota"},{"game_id":401628499,"school":"Purdue","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628499,"home_team":"Purdue","away_team":"Nebraska"},{"game_id":401628499,"school":"Nebraska","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628499,"home_team":"Purdue","away_team":"Nebraska"},{"game_id":401628501,"school":"Washington","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628501,"home_team":"Rutgers","away_team":"Washington"},{"game_id":401628501,"school":"Rutgers","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628501,"home_team":"Rutgers","away_team":"Washington"},{"game_id":401628495,"school":"Illinois","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628495,"home_team":"Penn State","away_team":"Illinois"},{"game_id":401628495,"school":"Penn State","category":"rushingTDs","stat":3,"season":2024,"game_id_from_results":401628495,"home_team":"Penn State","away_team":"Illinois"},{"game_id":401628510,"school":"Penn State","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628510,"home_team":"Penn State","away_team":"UCLA"},{"game_id":401628510,"school":"UCLA","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628510,"home_team":"Penn State","away_team":"UCLA"},{"game_id":401628507,"school":"Minnesota","category":"rushingTDs","stat":3,"season":2024,"game_id_from_results":401628507,"home_team":"Minnesota","away_team":"USC"},{"game_id":401628507,"school":"USC","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628507,"home_team":"Minnesota","away_team":"USC"},{"game_id":401628503,"school":"Indiana","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628503,"home_team":"Northwestern","away_team":"Indiana"},{"game_id":401628503,"school":"Northwestern","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628503,"home_team":"Northwestern","away_team":"Indiana"},{"game_id":401628506,"school":"Oregon","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628506,"home_team":"Oregon","away_team":"Michigan State"},{"game_id":401628506,"school":"Michigan State","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628506,"home_team":"Oregon","away_team":"Michigan State"},{"game_id":401628505,"school":"Washington","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628505,"home_team":"Washington","away_team":"Michigan"},{"game_id":401628505,"school":"Michigan","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628505,"home_team":"Washington","away_team":"Michigan"},{"game_id":401628508,"school":"Rutgers","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628508,"home_team":"Nebraska","away_team":"Rutgers"},{"game_id":401628508,"school":"Nebraska","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628508,"home_team":"Nebraska","away_team":"Rutgers"},{"game_id":401628504,"school":"Iowa","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628504,"home_team":"Ohio State","away_team":"Iowa"},{"game_id":401628504,"school":"Ohio State","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628504,"home_team":"Ohio State","away_team":"Iowa"},{"game_id":401628509,"school":"Purdue","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628509,"home_team":"Wisconsin","away_team":"Purdue"},{"game_id":401628509,"school":"Wisconsin","category":"rushingTDs","stat":4,"season":2024,"game_id_from_results":401628509,"home_team":"Wisconsin","away_team":"Purdue"},{"game_id":401628465,"school":"Michigan State","category":"rushingTDs","stat":0,"season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628465,"school":"Maryland","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628476,"school":"Indiana","category":"rushingTDs","stat":2,"season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"},{"game_id":401628476,"school":"UCLA","category":"rushingTDs","stat":1,"season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"}]
};


const allOption = { value: '*', label: 'Select All' };

function RushTDChart() {
  const [selectedSchools, setSelectedSchools] = useState<any[]>([
    {
      value: 'Nebraska',
      label: 'Nebraska',
    },
  ]);

  const handleSelectChange = (selected: any) => {
    if (selected && selected.some((option: any) => option.value === allOption.value)) {
      // If "Select All" is selected, set all options
      setSelectedSchools(schoolOptions);
    } else {
      // Otherwise, set the selected options
      setSelectedSchools(selected);
    }
  };

  const filteredData = selectedSchools.length
    ? allData.Multi_School_RushTD.filter((entry) =>
        selectedSchools.some((school) => school.value === entry.school)
      )
    : [];

  const sortedData = filteredData.sort((a, b) => a.stat - b.stat);

  const chartData = {
    labels: filteredData.map((d) => `${d.school}-${d.game_id}`), // Unique labels for plotting
    displayLabels: filteredData.map((d) => d.school), // Labels to display on y-axis
    schools: filteredData.map((d) => d.school),
    opponents: filteredData.map((d) =>
      d.home_team === d.school ? d.away_team : d.home_team
    ),
    statValues: filteredData.map((d) => d.stat.toString()), // Convert numbers to strings
  };

  // Calculate the chart height
  const barHeight = 30; // Height per bar in pixels
  
  const minChartHeight = 400; // or any suitable minimum height
  const calculatedHeight = chartData.labels.length * barHeight + 100;
  const chartHeight = Math.max(minChartHeight, calculatedHeight);

  return (
    <div>
      <Select
        options={[allOption, ...schoolOptions]}
        value={selectedSchools}
        isMulti
        onChange={handleSelectChange}
        placeholder="Select Schools"
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
      />

      {chartData.schools.length > 0 ? (
        <Plot
          data={[
            {
              x: chartData.statValues,
              y: chartData.labels, // Use unique labels for plotting
              text: chartData.statValues,
              type: 'bar',
              orientation: 'h',
              marker: {
                color: chartData.schools.map((school) =>
                  school === 'Nebraska' ? 'red' : 'lightgray'
                ),
              },
              hoverinfo: 'y+text',
              name: 'Schools',
            },
          ]}
          layout={{
            title: 'Total Rushing Touchdowns',
            xaxis: { title: 'Total Rushing Touchdowns' },
            yaxis: {
              title: '',
              automargin: true,
              tickmode: 'array',
              tickvals: chartData.labels, // Positions of ticks (unique labels)
              ticktext: chartData.displayLabels, // Labels to display (school names)
            },
            annotations: chartData.labels.map((label, index) => ({
              x: chartData.statValues[index], // Align annotation with bar
              y: label, // Use unique label for alignment
              xref: 'x',
              yref: 'y',
              text: chartData.opponents[index] + ' (opp)', // Display the opponent name
              xanchor: 'left',
              showarrow: false,
              align: 'right',
              xshift: 10,
            })),
            height: chartHeight,
            margin: { l: 100, r: 150 }, // Adjust margins as needed
          }}
          config={{ scrollZoom: true }}
        />
      ) : (
        <p>Please select schools to display the chart.</p>
      )}
    </div>
  );
}

export default RushTDChart;