<template>
  <div class="select">
    <label class="select__label">Сортировать</label>
    <div class="select__wrapper">
      <div class="select__custom" @click="optionsHide = !optionsHide">
        {{ options.active }}
        <div class="select__arrow" :class="{'select__arrow_active': optionsHide}"></div>
      </div>
      <div class="select__options" :class="{'select__options_active': optionsHide}">
        <div
          class="select__option"
          v-for="value in options.values"
          :key="value"
          :class="{'select__option_selected': value === options.active}"
          @click="optionClick"
        >{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionsHide: false,
      options: {
        values: ["по названию", "по диаметру", "по цене"],
        active: "по названию"
      }
    };
  },
  mounted() {
    this.$bus.$on("documentClick", e => {
      if (!e.target.matches(".select__custom")) {
        this.optionsHide = false;
      }
    });
  },
  methods: {
    optionClick(e) {
			const options = document.querySelectorAll(".select__option");
			for (let i = 0; i < options.length; i++) {
				options[i].classList.remove("select__option_selected");
			}
      e.target.classList.add("select__option_selected");
      this.options.active = e.target.innerHTML.trim();
    }
  }
};
</script>

<style lang="sass">
.select
	display: flex
	align-items: center
	+xs(margin-top, 15px)
	&__label
		font-size: 12px
		margin: 0 10px 1px 0
	&__wrapper
		position: relative
		font-size: 12px
		+xs(width, 100%)
	&__custom
		width: 122px
		height: 28px
		border: 1px solid $border
		border-radius: 4px
		padding: 5px 8px
		cursor: pointer
		line-height: 15px
		+xs(width, auto)
	&__arrow
		background: url(~assets/icons/arrow.svg) right top no-repeat
		position: absolute
		width: 10px
		height: 7px
		top: 11px
		right: 10px
		&_active
			transform: rotate(180deg)
	&__options
		position: absolute
		top: 30px
		left: 0
		overflow: hidden
		width: 100%
		height: 80px
		border: 1px solid $border
		border-radius: 4px
		background-color: $block
		display: none
		&_active
			display: block
	&__option
		cursor: pointer
		height: 26px
		padding: 5px 8px
		&_selected, &:hover
			background-color: $border
</style>