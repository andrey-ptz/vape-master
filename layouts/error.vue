<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="move" ref="move"></div>
      <div class="headline">
        <h1>Страница ошибки 404 (в разработке)</h1>
      </div>
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
	head() {
     return {
      title: 'Ошибка 404',
      meta: [
        { hid: "description", name: "description", content: 'Ошибка 404' }
      ]
    };
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