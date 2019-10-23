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
	},
	// get orderBy param from URL query, page name 
	// after sort card list and update activeSort param in store
	sortItems(state, payload) {
		const name = payload.name, orderBy = payload.orderBy;
		state[name].itemList = sortBySomething(state[name].itemList, orderBy)
		state[name].activeSort = orderBy
	}
}