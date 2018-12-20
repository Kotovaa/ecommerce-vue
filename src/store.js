import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'
import moment from 'moment';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		basket: [],
		total: 0,
		summ: 0
	},
	mutations: {
		getAllProducts(state, payload) {
			state.products = payload;
		},
		quantityDowm(state, { id, quantity }) {
			const record = state.basket.find(product => product.id === id)
			if(record.quantity > 0) {
				record.quantity--
			} else {
				record.quantity == 0
			}
		},
		addToBasket(state, { id, img, price, name }) {
			const record = state.basket.find(product => product.id === id)
			if(!record) {
				state.basket.unshift({
					id,
					img,
					price,
					name,
					quantity: 1,
					date: moment(new Date()).format('DD.MM.YYYY H:m:s')
				})
			} else {
				record.quantity++
			}
		},
		totalProducts(state) {
			state.total = state.basket.reduce((a, b) => a + b.quantity, 0)
			state.summ = state.basket.reduce((total, product) => {
				return total + product.price * product.quantity
			}, 0)
		},
		removeItem(state, index) {
			state.basket.splice(index, 1)
		}
	},
	actions: {
		getProducts({ commit }) {
			axios
			.get('/json/list.json')
			.then(response => {
				commit('getAllProducts', response.data.products);
			}).catch(errors => {
				console.error(errors);
			});
		},
		addToBasket({ commit }, product) {
			commit('addToBasket', {
				id: product.id,
				name: product.name,
				img: product.img,
				price: product.price
			})
			commit('totalProducts')
		},
		quantityUp({ commit }, product) {
			commit('addToBasket', product);
			commit('totalProducts');
		},
		quantityDown({ commit }, product) {
			commit('quantityDowm', product)
			commit('totalProducts');
		},
		removeItem({ commit }, index) {
			commit('removeItem', index)
			commit('totalProducts');

		}
	},
	getters: {
		getAllProducts: state => {
			return state.products;
		},
		getTotalInBasket: state => {
			return state.total
		},
		getBasketItems: state => {
			return state.basket
		},
		getSumm: state => {
			return state.summ
		}
	},
	plugins: [createPersistedState()]
})
