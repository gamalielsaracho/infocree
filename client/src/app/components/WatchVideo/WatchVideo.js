import React, { Component } from 'react'

class WatchVideo extends Component {
	render() {
		return <div className='watch-video'>
			<iframe className="watch-video__play" src="https://www.youtube.com/embed/8lp20JFiB4s"></iframe>
		</div>
	}
}

export default WatchVideo