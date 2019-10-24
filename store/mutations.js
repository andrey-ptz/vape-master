// function gets array, sort key and returns sorted array by this sort key
const sortBySomething = (array, param, reverse = false) => {
	return array.sort((a, b) => {
		return a[param] < b[param] ? -1 : (a[param] > b[param] ? 1 : 0)
	})
}

// get URL query params, split them and replace string values 
const replaceQueryValue = (queryValues, stateValues) => {
	const replacedQuery = {};
	Object.keys(queryValues).forEach((key) => {
		const valArr = [];
		if (queryValues[key].length && key !== 'orderBy') {
			queryValues[key].split('-').forEach((v) => {
				const value = v.toLowerCase().trim();

				if (value !== '') {
					if (!isNaN(value)) valArr.push(parseFloat(value))
					else if (value === 'true') valArr.push(true)
					else if (value === 'false') valArr.push(false)
					else {
						stateValues.forEach((param, i) => {
							if (key === param.name) {
								param.values.forEach(p => {
									if (p.toLowerCase() === value) valArr.push(p);
								})
							}
						})
					}
				}

			})
			replacedQuery[key] = valArr
		}
		else if (key !== 'orderBy') replacedQuery[key] = []
	})
	return replacedQuery
}

// check that filter params array from store include params from URL query
const compareArrays = (paramArray, queryArray, filterType) => {
	return filterType === 'checkbox'
		? queryArray.every(item => paramArray.includes(item))
		: queryArray[0] >= paramArray[0] && queryArray[1] <= paramArray[1]
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
	},
	// update search value parameter in store
	updateSearchValue(state, payload) {
		state[payload.name].searchValue = payload.searchValue
	},
	// get URL query params, process them and set to store
	filterValues(state, payload) {
		const query = payload.query, name = payload.name;
		const replacedQuery = replaceQueryValue(query, state[name].filterParams);
		if (Object.keys(replacedQuery).length) {
			state[name].filterParams.forEach((param, i) => {

				Object.keys(replacedQuery).forEach((key) => {
					if (param.name === key) {
						compareArrays(param.values, replacedQuery[key], param.type)
							? state[name].filterParams[i].activeValues = replacedQuery[key]
							: ''
					}
				})

			})
		} else {
			state[name].filterParams.forEach((param, i) => {
				state[name].filterParams[i].activeValues = []
			})
		}
	}
}