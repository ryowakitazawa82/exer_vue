import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './assets/components/LikeNumber.vue';

Vue.config.productionTip = false;
// グローバルで使いたい場合はこちらにimportして、コンポーネント登録をする
Vue.component('LikeNumber', LikeNumber)

new Vue({
  render: h => h(App),
}).$mount('#app')
