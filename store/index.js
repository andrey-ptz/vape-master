// get data from db and set data to store when app is initializing
export const actions = {
	async nuxtServerInit({ commit }) {
		let itemList = [];
		const atomData = await this.$axios.$get(process.env.baseUrl + '/atomizers.json');
		for (let key in atomData) itemList.push({ id: key, ...atomData[key] });
		commit('setItems', { itemList, name: 'atomizers' });
	}
}