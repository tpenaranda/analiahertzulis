import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'es',
  messages: {
    en: {
      contact: 'contact',
      frameless: 'no frame',
      name: 'english',
      tempera_on_paper: 'tempera on paper',
      work: 'work'
    },
    es: {
      contact: 'contacto',
      frameless: 'sin marco',
      name: 'castellano',
      tempera_on_paper: 'tempera sobre papel',
      work: 'obras'
    },
    ca: {
      contact: 'contacte',
      frameless: 'sensa marc',
      name: 'català',
      tempera_on_paper: 'tremp sobre paper',
      work: 'obres'
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
