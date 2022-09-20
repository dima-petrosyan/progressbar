import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProgressItem from './ProgressItem.js'
import { getItemsData } from '../../redux/progressSelector.js'
import ProgressTitle from './ProgressTitle.js'

function Progress(props) {

	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				{
					props.itemsData.map((item, index) => {
						return [...Array(item.numberOfItems).keys()].map(() => {
							return <ProgressItem width={props.width} 
											 	 height={props.height}
											 	 color={item.color} />
						})	
					})
				}
			</div>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				{
					props.itemsData.map((item, index) => {
						return <ProgressTitle title={item.name}
											  color={item.color}
											  value={item.value}
											  percent={item.percent} />
					})
				}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		itemsData: getItemsData(state).itemsData,
		height: state.progress.height,
		width: state.progress.width
	}
}

export default connect(mapStateToProps, {})(Progress)