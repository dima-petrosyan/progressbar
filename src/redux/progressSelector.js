

export const getItemsData = (state) => {

	const data = state.progress.items
	const sum = data.reduce((acc, item) => {
		return acc + item.value
	}, 0)
	const totalNumberOfBlocks = 100
	const numberOfItems = data.map(item => {
		return Math.ceil((item.value / sum) * totalNumberOfBlocks)
	})

	return {
		itemsData: data.map((item, index) => {
			return {
				...item,
				percent: Math.ceil(item.value / sum * 100),
				numberOfItems: numberOfItems[index]
			}
		})
	}
}