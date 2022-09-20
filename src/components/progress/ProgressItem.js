import React from 'react'

function ProgressItem(props) {
	return (
		<div style={
			{
				width: props.width, 
				height: props.height,
				backgroundColor: props.color,
				border: '1px solid black',
				borderRadius: '3px'
			}
		}>
			
		</div>
	)
}

export default ProgressItem