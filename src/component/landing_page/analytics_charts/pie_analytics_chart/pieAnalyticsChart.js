import React from 'react';
import Chart from 'react-google-charts';

const PieChart = ()=>{
	return(
		<Chart
		  width={'300px'}
		  height={'300px'}
		  chartType="PieChart"
		  loader={<div>Loading Chart</div>}
		  data={[
		    ['Language', 'Speakers (in millions)'],
		    ['German', 5.85],
		    ['French', 1.66],
		    ['Italian', 0.316],
		    ['Romansh', 0.0791],
		  ]}
		  options={{
		    legend: 'none',
		    pieSliceText: 'label',
		    title: 'Swiss Language Use (100 degree rotation)',
		    pieStartAngle: 100,
		  }}
		  rootProps={{ 'data-testid': '4' }}
		/>
		)
}

export default PieChart