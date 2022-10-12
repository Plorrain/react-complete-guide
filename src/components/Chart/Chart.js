import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

  return (
    <div className='chart'>
      {/* we could render the chartBar component 12x or see below */}
      {props.dataPoints.map(dataPoint =>
        <ChartBar value={dataPoint.value}
        />
      )}
    </div>
  )
};

export default Chart;
