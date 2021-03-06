import React from 'react';
import Chart from 'react-google-charts'

const BarChart = ()=>{
	return(
		<Chart
		  width={'450px'}
		  height={'300px'}
		  chartType="Bar"
		  loader={<div>Loading Chart</div>}
		  data={[
		    ['Year', 'Carbon', 'Greenhouse', 'Profit'],
		    ['2014', 1000, 400, 200],
		    ['2015', 1170, 460, 250],
		    ['2016', 660, 1120, 300],
		    ['2017', 1030, 540, 350],
		  ]}
		  options={{
		    // Material design options
		    chart: {
		      title: 'ECCO performance',
		      subtitle: 'Consumption of Greenhouse gases: 2014-2017',
		    },
		  }}
		  // For tests
		  rootProps={{ 'data-testid': '2' }}
		/>
		)
}

export default BarChart