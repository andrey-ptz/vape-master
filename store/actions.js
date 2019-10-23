export default {
	// get query from URL, get page name and call mutations
	// for sort state by orderBy param
	// for set filter params to store
	filterValues({ commit, state }, payload) {
		const query = payload.query, pageState = state[payload.name];
		('orderBy' in query && pageState.sortParams.some(p => p.value === query.orderBy))
			? commit('sortItems', { orderBy: query.orderBy, name: payload.name })
			: commit('sortItems', { orderBy: pageState.defaultSort, name: payload.name })

			commit('filterValues', payload)
	}
}