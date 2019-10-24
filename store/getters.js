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
		// get page name and return card list
		// which matches filter parameters from store
		// and matches search field
		return name => {
			let tempState = state[name].itemList,
					filteredState,
					search = state[name].searchValue;

			if (search) {
				search = search.trim().toLowerCase();
				filteredState = tempState.filter(item => {
					if (`${item.brand} ${item.name}`.toLowerCase().indexOf(search) !== -1) {
						return item
					}
				})
				tempState = filteredState
			}

			state[name].filterParams.forEach((p) => {
				if (p.activeValues.length) {
					filteredState = tempState.filter((item) => {
						return p.type === 'checkbox'
							? p.activeValues.includes(item[p.name])
							: item[p.name] >= p.activeValues[0] && item[p.name] <= p.activeValues[1]
					})
					tempState = filteredState
				}
			})
			return tempState
		}
	}
}