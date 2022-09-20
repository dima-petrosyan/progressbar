import React from 'react'

function ProgressTitle(props) {
	return (
		<div style={{display: 'flex', marginTop: '10px'}}>
			<div style={{width: '15px', height: '15px', borderRadius: '50%', backgroundColor: props.color}}></div>
			<h1>{props.title}: {props.value} ({props.percent}%)</h1>
		</div>
	)
}

export default ProgressTitle