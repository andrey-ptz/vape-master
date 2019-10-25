<template>
	<div>
		<Header />
		<div class="wrapper">
			<div class="move" ref="move"></div>
			<div class="headline">
				<h1>Боксмоды</h1>
				<div class="hidden-filter">
					<button class="hidden-filter__btn" 
						:class="{'hidden-filter__btn_active': hiddenFilter}"
						@click="showHiddenFilter">
					</button>
				</div>
			</div>
			<div class="container">
				<Filters :pageName="pageName" />
				<div class="main-container">
					<div class="sort">
						<div class="search">
							<input class="search__input" 
								type="search" 
								placeholder="Быстрый поиск"
								v-model="searchValue"
							/>
						</div>
						<CustomSelect :pageName="pageName" />
					</div>
					<main>
						<transition-group name="card" tag="ul" class="card-list">
							<Card 
								v-for="value in items" 
								:key="value.name"
								:card="value"
								:pageName="pageName"
							/>
						</transition-group>
					</main>
					<transition name="btn_load">
						<button 
							class="btn btn_load" 
							v-if="itemList.length > currentSize"
							@click="loadMore"
						>
							Показать еще
						</button>
					</transition>
				</div>
				<Footer />
			</div>
		</div>
	</div>
</template>

<script>
import Header from '~/components/Sections/Header'
import Filters from "~/components/Filters/Filters";
import CustomSelect from "~/components/Sort/CustomSelect";
import Card from "~/components/Sections/Card";
import Footer from "~/components/Sections/Footer";

export default {
  components: {
		Header,
    Filters,
		CustomSelect,
		Card,
		Footer
	},
	head() {
		return {
			title: 'Боксмоды',
			meta: [
				{ hid: "description", name: "description", content: 'Лучшие боксмоды' }
			]
		}
  },
	data() {
    return {
			searchValue: '',
			pageName: 'mods',
			hiddenFilter: false,
			defaultSize: 6,
			currentSize: 6,
			loadMoreSize: 6
    }
  },
	computed: {
		// call getter with page name param and get cards list
		itemList() {
      return this.$store.getters.itemList(this.pageName);
		},
		// show only currentSize cards
		items() {
			return this.itemList.slice(0, this.currentSize);
		}
	},
	methods: {
		// if resolution <= 900px show filter when filter button click
		showHiddenFilter() {
			this.hiddenFilter = !this.hiddenFilter
			this.$bus.$emit('showHiddenFilter', this.hiddenFilter)
		},
		// show more cards when load more button clicked
		loadMore() {
			this.currentSize += this.loadMoreSize
		}
	},
	watch: {
		// call every time, when search field change
    searchValue() {
      this.$store.dispatch('updateSearchValue', {
				searchValue: this.searchValue.trim(),
				name: this.pageName
			})
    }
  },
  mounted() {
		// add a listener for the clearPage event
		this.$bus.$on('clearPage', () => {
			this.currentSize = this.defaultSize;
			this.searchValue = '';
		})
	},
	// call every time, when URL change
	validate ({ params, query, store }) {
		store.dispatch('filterValues', { query, name: 'mods' });
		return true
	},
	beforeDestroy() {
		// destroy the listener
    this.$bus.$off("clearPage");
  }
};
</script>