import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

  return (
    <div className='chart'>
      {/* we could render the chartBar component 12x or see below */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
