import React from 'react';
import './profile_landing.css';
import InfoCard from './info_card/infoCard';
import CreatePostCard from './create_post_card/createPostCard';

const ProfileLanding = ()=>{

	return(
		<div className='profilelanding'>
			<div className='container'>
				<div className='row row-custom'>
					<div className='col-md-1'>
					</div>
					<div className='col-sm-8 col-md-9 col-lg-8 col-custom'>
						<CreatePostCard />
					</div>
					<div className='col-md-1'>
					</div>
				</div>

				<div className='row row-custom'>
					<div className='col-md-1'>
					</div>
					<div className='col-sm-8 col-md-9 col-lg-8 col-custom'>
						<InfoCard />
					</div>
					<div className='col-md-1'>
					</div>
				</div>

				<div className='row row-custom'>
					<div className='col-md-1'>
					</div>
					<div className='col-sm-8 col-md-9 col-lg-8 col-custom'>
						<InfoCard />
					</div>
					<div className='col-md-1'>
					</div>
				</div>
			</div>
		</div>
		)
}

export default ProfileLanding

