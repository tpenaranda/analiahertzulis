import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      name: 'english',
      work: 'work',
      contact: 'contact'
    },
    es: {
      name: 'castellano',
      work: 'obras',
      contact: 'contacto'
    },
    ca: {
      name: 'català',
      work: 'obres',
      contact: 'contacte'
    }
  }
})

Vue.filter('capitalize', (value) => {
  if (!value) {
    return ''
  }

  value = value.toString().replace(/_/g, ' ')

  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
