<template>
	<div>
    <Header />
		<div class="wrapper">
			<div class="move" ref="move"></div>
			<div class="headline">
				<h1>Главная страница (в разработке)</h1>
			</div>
		</div>
		<div style="height: calc(100vh + 100px)"></div>
  </div>
</template>

<script>
import Header from '~/components/Sections/Header.vue'

export default {
	components: {
		Header
	}
}
</script>