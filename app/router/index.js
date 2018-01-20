import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Typeahead1 from '../components/Typeahead1'
import Typeahead2 from '../components/Typeahead2'
import typeahead from "vuejs-typeahead";
import VueTypeahead from "vue-typeahead";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
  ]
})
