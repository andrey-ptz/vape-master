<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    documentClick(e) {
      this.$bus.$emit("documentClick", e);
    },
    windowResize() {
      this.$bus.$emit("windowResize");
    }
  },
  mounted() {
    document.addEventListener("click", this.documentClick);
    window.addEventListener("resize", this.windowResize);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.documentClick);
    window.removeEventListener("resize", this.windowResize);
  }
};
</script>