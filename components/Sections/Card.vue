<template>
  <div class="card">
    <img class="card__image" 
			:src="`img/${card.img}`" 
			:alt="`${card.brand} ${card.name}`"
		/>
    <div class="card__content">
      <h2 class="card__title">{{ `${card.brand} ${card.name}` }}</h2>
      <table class="card__table">
        <tbody>
          <tr v-for="param in cardParams" :key="param.name">
            <td>{{ param.name }}</td>
            <td>{{ param.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card__footer">
      <a href="#" class="btn btn_more">Подробнее</a>
      <div class="card__price">{{ card.price.toLocaleString('ru') }} руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      params: {
        atomizers: {
          volume: "Объем (мл)",
          diameter: "Диаметр (мм)",
          original: "Оригинал",
          stock: "Наличие",
          airflow: "Обдув",
          brand: "Производитель"
        }
      }
    };
  },
  computed: {
    cardParams() {
			let key, value, cardParams = [];
      for (key in this.params.atomizers) {
				
				switch (key) {
          case 'original':
						this.card[key] ? value = "Да" : value = "Нет"
						break;
					case 'airflow':
						this.card[key] ? value = "Настраиваемый" : value = "Не регулируется"
						break;
					case 'stock':
						this.card[key] >= 10 ? value = "Много" : value = "Мало"
						break;
					default:
    				value = this.card[key]
        }

        cardParams.push({
          name: this.params.atomizers[key],
          value
        });
      }
      return cardParams;
    }
  }
};
</script>

<style lang="sass">
@import "~/assets/sass/mixins/_fluid-font-size"

.card
	+col()
	+size(4)
	+size-lg(6)
	+size-md(6)
	+size-xs(12)
	min-width: 262px
	display: flex
	flex-direction: column
	background-color: $block
	margin-bottom: 20px
	font-size: 12px
	border: 1px solid $border
	box-shadow: $shadow
	border-radius: 4px
	overflow: hidden
	&__image
		width: 100%
		flex-shrink: 0
	&__content
		padding: 15px 19px
		flex-grow: 1
	&__title
		height: 48px
		font-size: 20px
		font-weight: 500
		margin-bottom: 9px
		line-height: 1.2
		overflow: hidden
		+md-block()
			+fluidFontSize(20px, 24px, 611px, 900px)
		+xs-block()
			+fluidFontSize(20px, 26px, 320px, 610px)
	&__table
		width: 100%
		border-collapse: separate
		border-spacing: 2px
		+md-block()
			+fluidFontSize(12px, 16px, 611px, 900px)
		+xs-block()
			+fluidFontSize(12px, 18px, 320px, 610px)
		td
			padding: 1px 0 2px
			width: 50%
			&:first-child
				color: $grey
	&__footer
		padding: 0 19px
		margin: 10px 0 20px
		display: flex
		justify-content: space-between
		align-items: center
	&__price
		font-size: 16px
		font-weight: 500
		margin: -2px 0 0 11px
		color: $main
		+md-block()
			+fluidFontSize(16px, 18px, 611px, 900px)
		+xs-block()
			+fluidFontSize(16px, 18px, 320px, 610px)
</style>