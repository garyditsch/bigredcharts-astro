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
  Multi_School_Possession: [{"game_id":401628489,"school":"Michigan","category":"possessionTime","stat":"29:18","season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628489,"school":"USC","category":"possessionTime","stat":"30:42","season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628491,"school":"Washington","category":"possessionTime","stat":"29:29","season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628491,"school":"Northwestern","category":"possessionTime","stat":"26:56","season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628487,"school":"Iowa","category":"possessionTime","stat":"31:43","season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628487,"school":"Minnesota","category":"possessionTime","stat":"27:12","season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628485,"school":"Illinois","category":"possessionTime","stat":"29:39","season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628485,"school":"Nebraska","category":"possessionTime","stat":"30:21","season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628465,"school":"Michigan State","category":"possessionTime","stat":"27:31","season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628465,"school":"Maryland","category":"possessionTime","stat":"32:29","season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628476,"school":"Indiana","category":"possessionTime","stat":"31:34","season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"},{"game_id":401628476,"school":"UCLA","category":"possessionTime","stat":"28:26","season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"}]
};

function PossessionTimeChart() {
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);

  const handleSelectChange = (selectedOptions: any) => {
    setSelectedSchools(selectedOptions.map((option: any) => option.value));
  };

  const filteredData = selectedSchools.length
    ? allData.Multi_School_Possession.filter(entry =>
        selectedSchools.includes(entry.school)
      )
    : [];

  const chartData = {
    schools: filteredData.map(d => d.school),
    opponents: filteredData.map(d => (d.home_team === d.school ? d.away_team : d.home_team)),
    statValues: filteredData.map(d => d.stat) // Already in string format, no need to convert
  };

  return (
    <div>
      <Select
        options={schoolOptions}
        isMulti
        onChange={handleSelectChange}
        placeholder="Select Schools"
      />

      {chartData.schools.length > 0 ? (
       <Plot
          data={[
            {
              x: chartData.statValues,
              y: chartData.schools,
              text: chartData.statValues,
              type: 'bar',
              orientation: 'h',
              marker: {
                color: chartData.schools.map(school => school === 'Nebraska' ? 'red' : 'lightgray'),
              },
              hoverinfo: 'y+text', // Fixed hoverinfo
              name: 'Schools',
            }
          ]}
          layout={{
            title: 'Total Possession Time',
            xaxis: { title: 'Possession Time (mm:ss)' },
            yaxis: { title: '', automargin: true },
            annotations: chartData.schools.map((school, index) => ({
              x: chartData.statValues[index],  // Align annotation with bar
              y: school,  // Align annotation with y axis school
              xref: 'x',
              yref: 'y',
              text: chartData.opponents[index] + ' (opp)',  // Display the opponent name
              xanchor: 'left',  // Position text on the right of the chart
              showarrow: false,  // No arrows, just text
              align: 'right',
              xshift: 10  // Shift text a bit to the right of the bars
            })),
            margin: { l: 100, r: 150 },  // Adjust right margin to make room for annotations
          }}
          config={{ scrollZoom: true }}  // Removed Plotly from config
        />
      ) : (
        <p>Please select schools to display the chart.</p>
      )}
    </div>
  );
}

export default PossessionTimeChart;
