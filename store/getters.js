export default {
	// get page name and return card params
	itemParams(state) {
		return name => {
			return state[name].itemParams
		}
	},
	// get page name and return filter params
	filterParams(state) {
		return name => {
			return state[name].filterParams
		}
	},
	// get page name and return params for custom select
	sortParams(state) {
		return name => {
			return state[name].sortParams
		}
	},
	// get page name, check active sort value in array values
	// and return index of active value
	activeSortIndex(state) {
		return name => {
			let activeSortIndex = 0;
			state[name].sortParams.forEach((param, i) => {
				if (param.value === state[name].activeSort) activeSortIndex = i
			})
			return activeSortIndex
		}
	},
	itemList(state) {
		// get page name and return cards list
		return name => {
			return state[name].itemList
		}
	}
}