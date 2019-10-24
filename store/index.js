// get data from db and set it to store when app is initializing
export const actions = {
	async nuxtServerInit({ commit }) {
		let itemList = [];
		const atomData = await this.$axios.$get(process.env.baseUrl + '/atomizers.json');
		const modsData = await this.$axios.$get(process.env.baseUrl + '/mods.json');
		for (let key in atomData) itemList.push({ id: key, ...atomData[key] });
		commit('setItems', { itemList, name: 'atomizers' });
		itemList = [];
		for (let key in modsData) itemList.push({ id: key, ...modsData[key] });
		commit('setItems', { itemList, name: 'mods' });
	}
}