<template>
  <div class="select">
    <label class="select__label">Сортировать</label>
    <div class="select__wrapper">
      <div class="select__custom" @click="optionsHide = !optionsHide">
        {{ valueActiveOption }}
        <div class="select__arrow" :class="{'select__arrow_active': optionsHide}"></div>
      </div>
      <div ref="options" class="select__options" 
				:class="{'select__options_active': optionsHide}">
        <div
          class="select__option"
          v-for="(value, i) in optionsList"
          :key="i"
          :class="{'select__option_selected': i === indexActiveOption}"
          @click="optionClick(i)"
        >{{ value.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		pageName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
			optionsHide: false,
			optionsList: [],
			indexActiveOption: 0,
			valueActiveOption: ''
    }
	},
  mounted() {
		this.loadOptions();

    this.$bus.$on("documentClick", e => {
      if (!e.target.matches(".select__custom")) {
        this.optionsHide = false;
      }
		});

		this.$bus.$on('clearPage', () => {
			this.indexActiveOption = 0;
			this.valueActiveOption = this.optionsList[0].name
		});
  },
  methods: {
		loadOptions() {
			const activeIndex = this.$store.getters.activeSortIndex(this.pageName);
			this.optionsList = this.$store.getters.sortParams(this.pageName);
			this.valueActiveOption = this.optionsList[activeIndex].name;
			this.indexActiveOption = activeIndex;
		},
    optionClick(index) {
			this.indexActiveOption = index;
			this.valueActiveOption = this.optionsList[index].name;
			this.$router.push({ 
				query: { ...this.$route.query, 'orderBy': this.optionsList[index].value } 
			});
    }
	},
	beforeDestroy() {
    this.$bus.$off("clearPage");
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