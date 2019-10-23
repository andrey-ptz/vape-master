export default () => ({
	itemList: [],
	searchValue: '',
	defaultSort: 'brand',
	activeSort: 'brand',
	sortParams: [
		{ name: 'по бренду', value: 'brand' },
		{ name: 'по мощности', value: 'power' },
		{ name: 'по цене', value: 'price' },
	],
	itemParams: {
		power: "Мощность (Вт)",
		batteries: "Аккумуляторы",
		charge: "Зарядка",
		weight: "Вес (гр)",
		stock: "Наличие",
		brand: "Производитель"
	},
	filterParams: [
		{
			name: 'batteries',
			title: "Аккумуляторы",
			type: "checkbox",
			values: [1, 2, 3],
			activeValues: [],
			direction: "row"
		},
		{
			name: 'price',
			title: "Стоимость, руб",
			type: "range",
			values: [2500, 4000],
			activeValues: []
		},
		{
			name: 'charge',
			title: "Возможность зарядки",
			type: "checkbox",
			values: [true, false],
			activeValues: [],
			direction: "column"
		},
		{
			name: 'power',
			title: "Макс. мощность, Вт",
			type: "range",
			values: [75, 300],
			activeValues: []
		},
		{
			name: 'brand',
			title: "Бренд",
			type: "checkbox",
			values: ["IJOY", "Joyetech", "SMOK", "Wismec"],
			activeValues: [],
			direction: "column"
		}
	]
})