import { createStore } from 'vuex'
import axios from 'axios'

const url = 'http://localhost:8080/api/product/'

export default createStore({
  state: {
    products: [],
    product: []
  },
  getters: {},
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const productsList = await axios.get(`${url}`)
        const slicedList = productsList.data.slice(0, 10)
        console.log(slicedList)
        commit('setProducts', slicedList)
      } catch (error) {
        console.log(error)
      }
    },
    async getProduct({ commit }, value) {
      try {
        const productList = await axios.get(`${url}${value}`)
        console.log(productList.data)
        commit('setProduct', productList.data)
      } catch (error) {
        console.log(error)
      }
    },
    async updateStock({ commit }, value) {
      try {
        const updatedProduct = await axios.put(`${url}${value}`)
        console.log(updatedProduct.data)
        commit('setProduct', updatedProduct.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
