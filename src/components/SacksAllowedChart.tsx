import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Select from 'react-select';
import dataframes from '../data/BoxScoreAnalysis';

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
const allData = dataframes;

const allOption = { value: '*', label: 'Select All' };

function SacksAllowedChart() {
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
    ? allData.Multi_School_Sacks.filter(entry =>
        selectedSchools.some(school => school.value === entry.school)
      )
    : [];

  const chartData = {
    labels: filteredData.map(d => `${d.school}-${d.game_id}`),
    displayLabels: filteredData.map(d => d.school),
    schools: filteredData.map(d => d.school),
    opponents: filteredData.map(d => (d.school === d.school ? d.opponent : d.school)),
    statValues: filteredData.map(d => d.opponent_stat_value.toString()) // Convert numbers to strings
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
            autosize: true,
            title: 'Sacks Allowed',
            xaxis: { title: 'Sacks' },
            yaxis: {
              title: '',
              automargin: true,
              tickmode: 'array',
              tickvals: chartData.labels, // Positions of ticks (unique labels)
              ticktext: chartData.displayLabels, // Labels to display (school names)
            },
            annotations: chartData.labels.map((label, index) => ({
              x: chartData.statValues[index],  // Align annotation with bar
              y: label,  // Align annotation with y axis school
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
          useResizeHandler={true}
          style={{ width: '100%', height: `${chartHeight}px` }}
          config={{ scrollZoom: true, responsive: true }}  // Removed Plotly from config
        />
      ) : (
        <p>Please select schools to display the chart.</p>
      )}
    </div>
  );
}

export default SacksAllowedChart;
