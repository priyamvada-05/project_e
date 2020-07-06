import React from 'react';
import './landing.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChart from './analytics_charts/analyticsCharts';
import PieChart from './analytics_charts/pie_analytics_chart/pieAnalyticsChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import LinearProgress from './progress_display/linear_progress';

const Landing = ()=>{


		return(
			<div className='landing'> 
				<div className='container'>
						<div className='row row-custom'>

							<div className='col-sm-12 col-md-6 col-lg-3 col-custom'>
								<Paper className='paper_div'> 
									<Paper className='paper_clip paper_clip_a'>
										<AttachMoneyIcon className='icon_paper'/>
									</Paper>
									<div className='details'>
										<h5>Sales</h5>
										<h3> $3000</h3>
									</div>
									<h6 className='progress_details'>Better than last week (25%)</h6>
									<div className='progress'>
										<LinearProgress data={25}/>
									</div>


								</Paper>
							</div>
							<div className='col-sm-12 col-md-6 col-lg-3 col-custom'>
								<Paper className='paper_div'> 
									<Paper className='paper_clip paper_clip_b'>
										<TrendingUpIcon className='icon_paper'/>
									</Paper>
									<div className='details'>
										<h5>Suscription</h5>
										<h3>500</h3>
									</div>
									<h6 className='progress_details'>Better than last week (50%)</h6>
									<div className='progress'>
										<LinearProgress data={50}/>
									</div>
								</Paper>
							</div>
							<div className='col-sm-12 col-md-6 col-lg-3 col-custom'>
								<Paper className='paper_div'> 
									<Paper className='paper_clip paper_clip_c'>
										<PieChartIcon className='icon_paper' />
									</Paper>
									<div className='details'>
										<h5>Traffic</h5>
										<h3> 5000</h3>
									</div>
									<h6 className='progress_details'>Worse than last week (75%)</h6>
									<div className='progress'>
										<LinearProgress data={75}/>
									</div>
								</Paper>
							</div>	

							<div className='col-sm-12 col-md-6 col-lg-3 col-custom'>
								<Paper className='paper_div'> 
									<Paper className='paper_clip paper_clip_d'>
										<BarChartIcon className='icon_paper' />
									</Paper>
									<div className='details'>
										<h5>Carbon level</h5>
										<h3> 9000</h3>
									</div>
									<h6 className='progress_details'>Better than last week (90%)</h6>
									<div className='progress'>
										<LinearProgress data={90}/>
									</div>
								</Paper>
							</div>					
						</div>

						<div className='row'>
							<div className='col-sm-12 col-md-12 col-lg-8'>
								<Paper className='chart'>
									<BarChart/>
								</Paper>
							</div>

							<div className='col-sm-12 col-md-12 col-lg-4'>
								<Paper className='chart'>
									<PieChart/>
								</Paper>
							</div>
											
						</div>
				</div>
			</div>
			)
}

export default Landing