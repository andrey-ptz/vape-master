<template>
  <aside ref="aside">
    <div class="filter">
      <div v-for="(param, i) in filterParams" :key="param.name">
        
				<div class="accordion accordion_active"
					:class="{'accordion_last': i === filterParams.length - 1}"
					@click="accordion"
				>
          <div class="accordion__title">{{ param.title }}</div>
          <span class="accordion__arrow"></span>
        </div>

        <CheckboxFilter
          v-if="param.type === 'checkbox'"
					:filterName="param.name"
          :values="param.values"
					:activeValues="param.activeValues"
          :direction="param.direction"
        />

        <RangeFilter 
					v-else-if="param.type === 'range'" 
					:filterName="param.name" 
					:values="param.values"
					:activeValues="param.activeValues"
				/>
      </div>
    </div>
  </aside>
</template>

<script>
import CheckboxFilter from "~/components/Filters/CheckboxFilter";
import RangeFilter from "~/components/Filters/RangeFilter";

export default {
  components: {
    CheckboxFilter,
    RangeFilter
  },
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  computed: {
    // call getter with page name param and get filter parameters
    filterParams() {
      return this.$store.getters.filterParams(this.pageName);
    }
  },
  mounted() {
		// if resolution <= 900px show filter when filter button click
    this.$bus.$on("showHiddenFilter", status => {
      status
        ? this.$refs.aside.classList.add("active")
        : this.$refs.aside.classList.remove("active");
    });

		// set styles for every accordion element
    let asideDisplay = getComputedStyle(this.$refs.aside).display;
    document.querySelectorAll(".accordion").forEach((el, i, arr) => {
      if (el.classList.contains("accordion_active") && asideDisplay != "none") {
        const panel = el.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
        i === arr.length - 1 ? panel.classList.add("filter__wrapper_last") : "";
      }
    });
  },
  methods: {
    accordion(e) {
			// open or close accordion element
      e.currentTarget.classList.toggle("accordion_active");
      const panel = e.currentTarget.nextElementSibling;
      if (parseInt(panel.style.maxHeight) !== 0) {
        panel.style.maxHeight = 0;
        panel.classList.remove("filter__wrapper_active");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("filter__wrapper_active");
      }
    }
  },
  beforeDestroy() {
		// destroy the listener
    this.$bus.$off("showHiddenFilter");
  }
};
</script>

<style lang="sass">
@import "~/assets/sass/nouislider"

aside
	+col()
	+size(3)
	+size-lg(4)
	+size-md(12)
	+md(display, none)
	&.active
		display: block

.filter
	margin-bottom: 40px
	border: 1px solid $border
	box-shadow: $shadow
	border-radius: 4px
	background-color: $block
	overflow: hidden
	&__wrapper
		padding: 0 18px
		background-color: $panel
		overflow: hidden
		border-bottom: none
		transition: max-height .2s ease-out
		&_active
			border-bottom: 1px solid $border
		&_last
			border-bottom: none

.accordion
	width: 100%
	text-align: left
	background-color: $block
	border: none
	outline: none
	border-bottom: 1px solid $border
	padding: 16px 0 17px 19px
	position: relative
	cursor: pointer
	transition: border-color .4s ease-out
	&__title
		color: $main
		font-weight: 500
	&__arrow
		position: absolute
		width: 10px
		height: 7px
		top: 22px
		right: 19px
		background: url(~assets/icons/arrow.svg) left top / 10px 7px no-repeat
	&_last
		border-bottom-color: $block
	&_active
		border-bottom: 1px solid $border
		.accordion__arrow
			transform: rotate(180deg)
</style>