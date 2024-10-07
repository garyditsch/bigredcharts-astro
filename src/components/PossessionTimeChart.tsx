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
  Multi_School_Possession: [{"game_id":401628489,"school":"Michigan","category":"possessionTime","stat":"29:18","season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628489,"school":"USC","category":"possessionTime","stat":"30:42","season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628491,"school":"Washington","category":"possessionTime","stat":"29:29","season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628491,"school":"Northwestern","category":"possessionTime","stat":"26:56","season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628487,"school":"Iowa","category":"possessionTime","stat":"31:43","season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628487,"school":"Minnesota","category":"possessionTime","stat":"27:12","season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628485,"school":"Illinois","category":"possessionTime","stat":"29:39","season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628485,"school":"Nebraska","category":"possessionTime","stat":"30:21","season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628500,"school":"Oregon","category":"possessionTime","stat":"26:36","season":2024,"game_id_from_results":401628500,"home_team":"UCLA","away_team":"Oregon"},{"game_id":401628500,"school":"UCLA","category":"possessionTime","stat":"26:28","season":2024,"game_id_from_results":401628500,"home_team":"UCLA","away_team":"Oregon"},{"game_id":401628502,"school":"Wisconsin","category":"possessionTime","stat":"19:53","season":2024,"game_id_from_results":401628502,"home_team":"USC","away_team":"Wisconsin"},{"game_id":401628502,"school":"USC","category":"possessionTime","stat":"39:04","season":2024,"game_id_from_results":401628502,"home_team":"USC","away_team":"Wisconsin"},{"game_id":401628496,"school":"Maryland","category":"possessionTime","stat":"29:22","season":2024,"game_id_from_results":401628496,"home_team":"Indiana","away_team":"Maryland"},{"game_id":401628496,"school":"Indiana","category":"possessionTime","stat":"29:38","season":2024,"game_id_from_results":401628496,"home_team":"Indiana","away_team":"Maryland"},{"game_id":401628498,"school":"Ohio State","category":"possessionTime","stat":"35:41","season":2024,"game_id_from_results":401628498,"home_team":"Michigan State","away_team":"Ohio State"},{"game_id":401628498,"school":"Michigan State","category":"possessionTime","stat":"24:19","season":2024,"game_id_from_results":401628498,"home_team":"Michigan State","away_team":"Ohio State"},{"game_id":401628497,"school":"Minnesota","category":"possessionTime","stat":"26:44","season":2024,"game_id_from_results":401628497,"home_team":"Michigan","away_team":"Minnesota"},{"game_id":401628497,"school":"Michigan","category":"possessionTime","stat":"32:39","season":2024,"game_id_from_results":401628497,"home_team":"Michigan","away_team":"Minnesota"},{"game_id":401628499,"school":"Purdue","category":"possessionTime","stat":"29:42","season":2024,"game_id_from_results":401628499,"home_team":"Purdue","away_team":"Nebraska"},{"game_id":401628499,"school":"Nebraska","category":"possessionTime","stat":"30:18","season":2024,"game_id_from_results":401628499,"home_team":"Purdue","away_team":"Nebraska"},{"game_id":401628501,"school":"Washington","category":"possessionTime","stat":"30:34","season":2024,"game_id_from_results":401628501,"home_team":"Rutgers","away_team":"Washington"},{"game_id":401628501,"school":"Rutgers","category":"possessionTime","stat":"29:26","season":2024,"game_id_from_results":401628501,"home_team":"Rutgers","away_team":"Washington"},{"game_id":401628495,"school":"Illinois","category":"possessionTime","stat":"26:11","season":2024,"game_id_from_results":401628495,"home_team":"Penn State","away_team":"Illinois"},{"game_id":401628495,"school":"Penn State","category":"possessionTime","stat":"26:43","season":2024,"game_id_from_results":401628495,"home_team":"Penn State","away_team":"Illinois"},{"game_id":401628510,"school":"Penn State","category":"possessionTime","stat":"27:03","season":2024,"game_id_from_results":401628510,"home_team":"Penn State","away_team":"UCLA"},{"game_id":401628510,"school":"UCLA","category":"possessionTime","stat":"32:57","season":2024,"game_id_from_results":401628510,"home_team":"Penn State","away_team":"UCLA"},{"game_id":401628507,"school":"Minnesota","category":"possessionTime","stat":"29:12","season":2024,"game_id_from_results":401628507,"home_team":"Minnesota","away_team":"USC"},{"game_id":401628507,"school":"USC","category":"possessionTime","stat":"30:48","season":2024,"game_id_from_results":401628507,"home_team":"Minnesota","away_team":"USC"},{"game_id":401628503,"school":"Indiana","category":"possessionTime","stat":"32:09","season":2024,"game_id_from_results":401628503,"home_team":"Northwestern","away_team":"Indiana"},{"game_id":401628503,"school":"Northwestern","category":"possessionTime","stat":"27:51","season":2024,"game_id_from_results":401628503,"home_team":"Northwestern","away_team":"Indiana"},{"game_id":401628506,"school":"Oregon","category":"possessionTime","stat":"30:58","season":2024,"game_id_from_results":401628506,"home_team":"Oregon","away_team":"Michigan State"},{"game_id":401628506,"school":"Michigan State","category":"possessionTime","stat":"29:02","season":2024,"game_id_from_results":401628506,"home_team":"Oregon","away_team":"Michigan State"},{"game_id":401628505,"school":"Washington","category":"possessionTime","stat":"29:30","season":2024,"game_id_from_results":401628505,"home_team":"Washington","away_team":"Michigan"},{"game_id":401628505,"school":"Michigan","category":"possessionTime","stat":"30:30","season":2024,"game_id_from_results":401628505,"home_team":"Washington","away_team":"Michigan"},{"game_id":401628508,"school":"Rutgers","category":"possessionTime","stat":"28:25","season":2024,"game_id_from_results":401628508,"home_team":"Nebraska","away_team":"Rutgers"},{"game_id":401628508,"school":"Nebraska","category":"possessionTime","stat":"31:35","season":2024,"game_id_from_results":401628508,"home_team":"Nebraska","away_team":"Rutgers"},{"game_id":401628504,"school":"Iowa","category":"possessionTime","stat":"25:14","season":2024,"game_id_from_results":401628504,"home_team":"Ohio State","away_team":"Iowa"},{"game_id":401628504,"school":"Ohio State","category":"possessionTime","stat":"34:46","season":2024,"game_id_from_results":401628504,"home_team":"Ohio State","away_team":"Iowa"},{"game_id":401628509,"school":"Purdue","category":"possessionTime","stat":"28:13","season":2024,"game_id_from_results":401628509,"home_team":"Wisconsin","away_team":"Purdue"},{"game_id":401628509,"school":"Wisconsin","category":"possessionTime","stat":"31:47","season":2024,"game_id_from_results":401628509,"home_team":"Wisconsin","away_team":"Purdue"},{"game_id":401628465,"school":"Michigan State","category":"possessionTime","stat":"27:31","season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628465,"school":"Maryland","category":"possessionTime","stat":"32:29","season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628476,"school":"Indiana","category":"possessionTime","stat":"31:34","season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"},{"game_id":401628476,"school":"UCLA","category":"possessionTime","stat":"28:26","season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"}]
};

const allOption = { value: '*', label: 'Select All' };

function PossessionTimeChart() {
  const [selectedSchools, setSelectedSchools] = useState<any[]>([
    {
        "value": "Nebraska",
        "label": "Nebraska"
    }
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
    ? allData.Multi_School_Possession.filter(entry =>
        selectedSchools.some(school => school.value === entry.school)
      )
    : [];

  // Function to parse 'mm:ss' into seconds
  const parseTimeToSeconds = (timeStr:string) => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  
  // Sort the filteredData based on possession time in descending order
  filteredData.sort((a, b) => parseTimeToSeconds(a.stat) - parseTimeToSeconds(b.stat)); 

  const chartData = {
      labels: filteredData.map(d => `${d.school}-${d.game_id}`),
      displayLabels: filteredData.map(d => d.school),
      schools: filteredData.map(d => d.school),
      opponents: filteredData.map(d => (d.home_team === d.school ? d.away_team : d.home_team)),
      statValues: filteredData.map(d => parseTimeToSeconds(d.stat)),
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
              y: chartData.labels,
              text: chartData.statValues.map((value) => {
                const minutes = Math.floor(value / 60);
                const seconds = value % 60;
                return `${minutes}:${seconds.toString().padStart(2, '0')}`;
              }),
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
            xaxis: { title: 'Possession Time (seconds)' },
            yaxis: {
              title: '',
              automargin: true,
              tickmode: 'array',
              tickvals: chartData.labels, // Positions of ticks (unique labels)
              ticktext: chartData.displayLabels, // Labels to display (school names)
            },
            annotations: chartData.schools.map((school, index) => ({
              x: chartData.statValues[index],  // Align annotation with bar
              y: chartData.labels[index],
              xref: 'x',
              yref: 'y',
              text: chartData.opponents[index] + ' (opp)',  // Display the opponent name
              xanchor: 'left',  // Position text on the right of the chart
              showarrow: false,  // No arrows, just text
              align: 'right',
              xshift: 10  // Shift text a bit to the right of the bars
            })),
            height: chartHeight,
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
