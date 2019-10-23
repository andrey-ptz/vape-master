export default {
	// get page name and return card params from store of this page
	itemParams(state) {
		return name => {
			return state[name].itemParams
		}
	},
	// get page name and return filter params from store of this page
	filterParams(state) {
		return name => {
			return state[name].filterParams
		}
	},
	itemList(state) {
		// get page name and return cards list from store of this page
		return name => {
			return state[name].itemList
		}
	}
}