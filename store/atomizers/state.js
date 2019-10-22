export default () => ({
	itemList: [],
	defaultSort: 'brand',
	activeSort: 'brand',
	sortParams: [
		{ name: 'по бренду', value: 'brand' },
		{ name: 'по объему', value: 'volume' },
		{ name: 'по диаметру', value: 'diameter' },
		{ name: 'по цене', value: 'price' },
	],
	itemParams: {
		volume: "Объем (мл)",
		diameter: "Диаметр (мм)",
		original: "Оригинал",
		airflow: "Обдув",
		stock: "Наличие",
		brand: "Производитель"
	},
	filterParams: [
		{
			name: 'volume',
			title: "Объем, мл",
			type: "checkbox",
			values: [2, 3, 4, 4.5, 5, 6],
			activeValues: [],
			direction: "row"
		},
		{
			name: 'price',
			title: "Стоимость, руб",
			type: "range",
			values: [1000, 2600],
			activeValues: []
		},
		{
			name: 'diameter',
			title: "Диаметр, мм",
			type: "checkbox",
			values: [21, 22, 24, 25],
			activeValues: [],
			direction: "row"
		},
		{
			name: 'airflow',
			title: "Регулировка обдува",
			type: "checkbox",
			values: [true, false],
			activeValues: [],
			direction: "column"
		},
		{
			name: 'brand',
			title: "Бренд",
			type: "checkbox",
			values: ["Advken", "Aspire", "Blitz", "Eleaf", "GeekVape",
				"IJOY", "SMOK", "Vandy Vape", "Wotofo"],
			activeValues: [],
			direction: "column"
		}
	]
})