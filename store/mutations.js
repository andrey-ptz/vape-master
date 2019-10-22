// function gets array, sort key and returns sorted array by this sort key
const sortBySomething = (array, param, reverse = false) => {
	return array.sort((a, b) => {
		return a[param] < b[param] ? -1 : (a[param] > b[param] ? 1 : 0)
	})
}

export default {
	// add data from db to store
	setItems(state, payload) {
		const itemList = payload.itemList, name = payload.name;
		state[name].itemList = sortBySomething(itemList, state[name].defaultSort)
	}
}