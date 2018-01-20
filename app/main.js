import Vue from 'vue'
import App from './App'
import router from './router'
import typeahead from "vuejs-typeahead";
import VueTypeahead from "vue-typeahead";
import { Typeahead } from "uiv";
import Axios from "axios";
import * as uiv from 'uiv'
import Multiselect from 'vue-multiselect'


import "vueify/lib/insert-css" // required for .vue file <style> tags

Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
