import Vue from 'vue'
import App from './App.vue'

Vue.config.prodactionTip= false 
//createApp(App).mount('#app')

new Vue({
    render: h=> h(App),
}).$mount('#app')
