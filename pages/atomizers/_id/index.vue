<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="move" ref="move"></div>
      <div class="headline">
        <h1>{{ `${this.data.brand} ${this.data.name} (Страница в разработке)` }}</h1>
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
    let title = `${this.data.brand} ${this.data.name}`,
      	descr = `Атомайзеры | ${this.data.brand} ${this.data.name}`

    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: descr }
      ]
    };
  },
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(process.env.baseUrl + `/atomizers/${params.id}.json`)
    return { data }
  }
};
</script>