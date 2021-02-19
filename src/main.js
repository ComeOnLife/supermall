import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
    //使用图片懒加载
Vue.use(VueLazyLoad)
    //解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')