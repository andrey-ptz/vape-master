<template>
  <div>
    <Header />
		<div class="wrapper">
			<div class="move" ref="move"></div>
		</div>
		<div style="height: calc(100vh + 100px)"></div>
  </div>
</template>

<script>
import Header from "~/components/Sections/Header.vue";

export default {
  components: {
    Header
	},
	methods: {
		documentClick(e) {
			this.$bus.$emit('documentClick', e)
		},
		windowResize() {
			this.$bus.$emit('windowResize')
		}
	},
  mounted() {
		document.addEventListener('click', this.documentClick);
		window.addEventListener('resize', this.windowResize);
	},
	beforeDestroy() {
		document.removeEventListener('click', this.documentClick);
		window.removeEventListener('resize', this.windowResize);
  }
};
</script>