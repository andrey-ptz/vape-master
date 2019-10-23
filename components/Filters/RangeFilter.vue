<template>
  <div class="filter__wrapper filter__wrapper_active">
    <div class="range">
      <div class="range__inputs">
        <div class="range__from">
          <label class="range__label">От</label>
          <input
            class="range__input"
            type="text"
            name="rangeFrom"
            maxlength="10"
            :value="values[0]"
          />
        </div>
        <div class="range__to">
          <label class="range__label">До</label>
          <input class="range__input" type="text" name="rangeTo" maxlength="10" :value="values[1]" />
        </div>
      </div>

      <div class="range__container">
        <div class="range__custom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="sass">
.range
	&__inputs
		margin-top: 13px
		display: flex
		justify-content: space-between
	&__from, &__to
		width: 50%
	&__to
		margin-left: 10px
	&__label
		font-size: 12px
		font-weight: bold
		margin-left: 10px
		margin-bottom: 0
	&__input
		margin-top: 2px
		border: 1px solid $border
		border-radius: 4px
		background-color: $block
		color: $main
		font-size: 12px
		padding: 0px 3px 1px 9px
		width: 100%
		height: 28px
		&::placeholder
			color: #bec8cd
			font-size: 12px
			opacity: 1
		&:-ms-input-placeholder
			color: #bec8cd
			font-size: 12px
		&:focus
			border: 1px solid $main
			outline: none
		&::-ms-clear
			display: none
	&__container
		height: 28px
		margin: 16px 0 2px
		width: calc(100% - 1px)
</style>