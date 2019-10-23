"use strict";

if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.matchesSelector
		|| Element.prototype.webkitMatchesSelector
		|| Element.prototype.mozMatchesSelector
		|| Element.prototype.msMatchesSelector;
}

const rangeStart = function rangeStart() {

	const range = document.querySelector('.range__custom'),
				rangeFrom = document.querySelectorAll('.range__input')[0],
				rangeTo = document.querySelectorAll('.range__input')[1];

	noUiSlider.create(range, {
		start: [+rangeFrom.value, +rangeTo.value],
		connect: true,
		range: {
			'min': +rangeFrom.value,
			'max': +rangeTo.value
		},
		format: {
			from: function from(value) {
				return parseInt(value);
			},
			to: function to(value) {
				return parseInt(value);
			}
		}
	});

	range.noUiSlider.on('update', function (values, handle, unencoded) {
		rangeFrom.value = values[0];
		rangeTo.value = values[1];
	});

	rangeFrom.addEventListener('change', function () {
		range.noUiSlider.set([this.value, null]);
	});

	rangeTo.addEventListener('change', function () {
		range.noUiSlider.set([null, this.value]);
	});
}