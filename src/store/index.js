import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: [],
        title: ''
    },
    mutations: {
        addCart(state, payLoad) {
            // state.cartList.push(payLoad)
            let oldProduct = null
            for (let item of state.cartList) {
                if (item.id === payLoad.id) {
                    oldProduct = item
                }
            }
            if (oldProduct) {
                oldProduct.count += 1
                state.title = '当前商品数量+1'
            } else {
                payLoad.count = 1
                payLoad.checked = true
                state.cartList.push(payLoad)
                state.title = '添加了新的商品'
            }
        }
    },
    actions: {},
    modules: {}
})