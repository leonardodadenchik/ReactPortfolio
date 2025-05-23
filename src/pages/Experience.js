import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'

function Experience() {
	return (
		<div className="experience">
			<VerticalTimeline lineColor='#3e497a'>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2010-2014'
					iconStyle={{background: '#3e497a', color: '#fff'}}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Bla bla bla LNZ super smart gg</h3>
					<h4 className='vertical-timeline-element-subtitle'>Subtitle test</h4>
					<p> High school diploma</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	)
}

export default Experience