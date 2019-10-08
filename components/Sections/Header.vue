<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="logo">
				<a href="#" class="logo__link">
					<span class="logo__title">Vape Master</span>
					<span class="logo__subtitle">Твой поставщик дыма</span>
				</a>
			</div>
			<nav class="nav">
				<div class="nav__hamburger">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul class="nav__list">
					<li class="nav__item nav__item_active">
						<a class="nav__link" href="#">Атомайзеры</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="#">Моды</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="#">Жидкости</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="#">Аксессуары</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="#">Доставка</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="#">О нас</a>
					</li>
					<li class="nav__item nav__item_hidden">Еще
						<ul class="nav__hidden-list">
							<li class="nav__hidden-item">
								<a class="nav__hidden-link" href="#">Аксессуары</a>
							</li>
							<li class="nav__hidden-item">
								<a class="nav__hidden-link" href="#">Доставка</a>
							</li>
							<li class="nav__hidden-item">
								<a class="nav__hidden-link" href="#">О нас</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="user">
				<div class="user__info">
					<a class="user__link" href="#">
						<img class="user__img" src="img/user.jpg" alt="Константин Константинов">
					</a>
					<div class="user__username">
						<span class="user__name">Константин</span>
						<span class="user__surname">Константинов</span>
					</div>
				</div>
				<div class="user__basket">
					<div class="user__basket-wrapper">
						<span class="user__basket-total">7</span>
						<a class="user__basket-icon" href="#"></a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {

}
</script>

<style lang="sass">

</style>