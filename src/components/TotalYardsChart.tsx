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
  { value: 'Wisconsin', label: 'Wisconsin' },
];

// Mock data
const allData = {
  Multi_School_TotalYards: [{"game_id":401628489,"school":"Michigan","category":"rushingYards","stat":290,"season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628489,"school":"USC","category":"rushingYards","stat":96,"season":2024,"game_id_from_results":401628489,"home_team":"Michigan","away_team":"USC"},{"game_id":401628491,"school":"Washington","category":"rushingYards","stat":140,"season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628491,"school":"Northwestern","category":"rushingYards","stat":59,"season":2024,"game_id_from_results":401628491,"home_team":"Washington","away_team":"Northwestern"},{"game_id":401628487,"school":"Iowa","category":"rushingYards","stat":272,"season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628487,"school":"Minnesota","category":"rushingYards","stat":74,"season":2024,"game_id_from_results":401628487,"home_team":"Minnesota","away_team":"Iowa"},{"game_id":401628485,"school":"Illinois","category":"rushingYards","stat":168,"season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628485,"school":"Nebraska","category":"rushingYards","stat":50,"season":2024,"game_id_from_results":401628485,"home_team":"Nebraska","away_team":"Illinois"},{"game_id":401628500,"school":"Oregon","category":"rushingYards","stat":153,"season":2024,"game_id_from_results":401628500,"home_team":"UCLA","away_team":"Oregon"},{"game_id":401628500,"school":"UCLA","category":"rushingYards","stat":47,"season":2024,"game_id_from_results":401628500,"home_team":"UCLA","away_team":"Oregon"},{"game_id":401628502,"school":"Wisconsin","category":"rushingYards","stat":106,"season":2024,"game_id_from_results":401628502,"home_team":"USC","away_team":"Wisconsin"},{"game_id":401628502,"school":"USC","category":"rushingYards","stat":163,"season":2024,"game_id_from_results":401628502,"home_team":"USC","away_team":"Wisconsin"},{"game_id":401628496,"school":"Maryland","category":"rushingYards","stat":112,"season":2024,"game_id_from_results":401628496,"home_team":"Indiana","away_team":"Maryland"},{"game_id":401628496,"school":"Indiana","category":"rushingYards","stat":152,"season":2024,"game_id_from_results":401628496,"home_team":"Indiana","away_team":"Maryland"},{"game_id":401628498,"school":"Ohio State","category":"rushingYards","stat":185,"season":2024,"game_id_from_results":401628498,"home_team":"Michigan State","away_team":"Ohio State"},{"game_id":401628498,"school":"Michigan State","category":"rushingYards","stat":47,"season":2024,"game_id_from_results":401628498,"home_team":"Michigan State","away_team":"Ohio State"},{"game_id":401628497,"school":"Minnesota","category":"rushingYards","stat":38,"season":2024,"game_id_from_results":401628497,"home_team":"Michigan","away_team":"Minnesota"},{"game_id":401628497,"school":"Michigan","category":"rushingYards","stat":155,"season":2024,"game_id_from_results":401628497,"home_team":"Michigan","away_team":"Minnesota"},{"game_id":401628499,"school":"Purdue","category":"rushingYards","stat":50,"season":2024,"game_id_from_results":401628499,"home_team":"Purdue","away_team":"Nebraska"},{"game_id":401628499,"school":"Nebraska","category":"rushingYards","stat":161,"season":2024,"game_id_from_results":401628499,"home_team":"Purdue","away_team":"Nebraska"},{"game_id":401628501,"school":"Washington","category":"rushingYards","stat":207,"season":2024,"game_id_from_results":401628501,"home_team":"Rutgers","away_team":"Washington"},{"game_id":401628501,"school":"Rutgers","category":"rushingYards","stat":184,"season":2024,"game_id_from_results":401628501,"home_team":"Rutgers","away_team":"Washington"},{"game_id":401628495,"school":"Illinois","category":"rushingYards","stat":34,"season":2024,"game_id_from_results":401628495,"home_team":"Penn State","away_team":"Illinois"},{"game_id":401628495,"school":"Penn State","category":"rushingYards","stat":239,"season":2024,"game_id_from_results":401628495,"home_team":"Penn State","away_team":"Illinois"},{"game_id":401628510,"school":"Penn State","category":"rushingYards","stat":85,"season":2024,"game_id_from_results":401628510,"home_team":"Penn State","away_team":"UCLA"},{"game_id":401628510,"school":"UCLA","category":"rushingYards","stat":93,"season":2024,"game_id_from_results":401628510,"home_team":"Penn State","away_team":"UCLA"},{"game_id":401628507,"school":"Minnesota","category":"rushingYards","stat":193,"season":2024,"game_id_from_results":401628507,"home_team":"Minnesota","away_team":"USC"},{"game_id":401628507,"school":"USC","category":"rushingYards","stat":173,"season":2024,"game_id_from_results":401628507,"home_team":"Minnesota","away_team":"USC"},{"game_id":401628503,"school":"Indiana","category":"rushingYards","stat":149,"season":2024,"game_id_from_results":401628503,"home_team":"Northwestern","away_team":"Indiana"},{"game_id":401628503,"school":"Northwestern","category":"rushingYards","stat":93,"season":2024,"game_id_from_results":401628503,"home_team":"Northwestern","away_team":"Indiana"},{"game_id":401628506,"school":"Oregon","category":"rushingYards","stat":213,"season":2024,"game_id_from_results":401628506,"home_team":"Oregon","away_team":"Michigan State"},{"game_id":401628506,"school":"Michigan State","category":"rushingYards","stat":59,"season":2024,"game_id_from_results":401628506,"home_team":"Oregon","away_team":"Michigan State"},{"game_id":401628505,"school":"Washington","category":"rushingYards","stat":114,"season":2024,"game_id_from_results":401628505,"home_team":"Washington","away_team":"Michigan"},{"game_id":401628505,"school":"Michigan","category":"rushingYards","stat":174,"season":2024,"game_id_from_results":401628505,"home_team":"Washington","away_team":"Michigan"},{"game_id":401628508,"school":"Rutgers","category":"rushingYards","stat":78,"season":2024,"game_id_from_results":401628508,"home_team":"Nebraska","away_team":"Rutgers"},{"game_id":401628508,"school":"Nebraska","category":"rushingYards","stat":97,"season":2024,"game_id_from_results":401628508,"home_team":"Nebraska","away_team":"Rutgers"},{"game_id":401628504,"school":"Iowa","category":"rushingYards","stat":116,"season":2024,"game_id_from_results":401628504,"home_team":"Ohio State","away_team":"Iowa"},{"game_id":401628504,"school":"Ohio State","category":"rushingYards","stat":203,"season":2024,"game_id_from_results":401628504,"home_team":"Ohio State","away_team":"Iowa"},{"game_id":401628509,"school":"Purdue","category":"rushingYards","stat":99,"season":2024,"game_id_from_results":401628509,"home_team":"Wisconsin","away_team":"Purdue"},{"game_id":401628509,"school":"Wisconsin","category":"rushingYards","stat":228,"season":2024,"game_id_from_results":401628509,"home_team":"Wisconsin","away_team":"Purdue"},{"game_id":401628465,"school":"Michigan State","category":"rushingYards","stat":130,"season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628465,"school":"Maryland","category":"rushingYards","stat":86,"season":2024,"game_id_from_results":401628465,"home_team":"Maryland","away_team":"Michigan State"},{"game_id":401628476,"school":"Indiana","category":"rushingYards","stat":123,"season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"},{"game_id":401628476,"school":"UCLA","category":"rushingYards","stat":96,"season":2024,"game_id_from_results":401628476,"home_team":"UCLA","away_team":"Indiana"}]
};

const allOption = { value: '*', label: 'Select All' };

function TotalYardsChart() {
  const [selectedSchools, setSelectedSchools] = useState<any[]>([
    {
      value: 'Nebraska',
      label: 'Nebraska',
    },
  ]);

  const handleSelectChange = (selected: any) => {
    if (selected && selected.some((option: any) => option.value === allOption.value)) {
      setSelectedSchools(schoolOptions);
    } else {
      setSelectedSchools(selected);
    }
  };

  const filteredData = selectedSchools.length
    ? allData.Multi_School_TotalYards.filter((entry) =>
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
            title: 'Total Rushing Yards',
            xaxis: { title: 'Total Rushing Yards' },
            yaxis: {
              title: '',
              automargin: true,
              tickmode: 'array',
              tickvals: chartData.labels, // Positions of ticks (unique labels)
              ticktext: chartData.displayLabels, // Labels to display (school names)
            },
            annotations: chartData.labels.map((label, index) => ({
              x: chartData.statValues[index],
              y: label, // Use unique label for alignment
              xref: 'x',
              yref: 'y',
              text: chartData.opponents[index] + ' (opp)',
              xanchor: 'left',
              showarrow: false,
              align: 'right',
              xshift: 10,
            })),
            height: chartHeight, // Set the dynamic height
            margin: { l: 100, r: 150 },
          }}
          config={{ scrollZoom: true }}
        />
      ) : (
        <p>Please select schools to display the chart.</p>
      )}
    </div>
  );
}

export default TotalYardsChart;