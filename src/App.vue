<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 px-6 py-1">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <div class="lds-heart small"><div></div></div>
        <span class="font-lacquer text-xl tracking-tight">Analía Hertzulis</span>
      </div>
      <div class="block lg:hidden">
        <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div ref="navItemsDiv" class="hidden lg-block w-full  flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg lg:flex-grow">
          <span @click="closeMenu"><router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mx-4 hover:text-white">Analía</router-link></span>
          <span @click="closeMenu"><router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mx-4 hover:text-white">{{ $t('work') | capitalize }}</router-link></span>
          <span @click="closeMenu"><router-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mx-4 hover:text-white">{{ $t('contact') | capitalize }}</router-link></span>
        </div>
        <div>
          <select v-model="$i18n.locale" class="appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 mt-4 mb-4 lg:mt-0 lg:mb-0 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center" id="grid-state">
            <option v-for="(lang, i) in Object.keys($i18n.messages)" :key="`lang${i}`" :value="lang">{{ $i18n.messages[lang].name | capitalize }}</option>
          </select>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleMenu () {
      this.$refs.navItemsDiv.style.display = this.$refs.navItemsDiv.style.display === 'block' ? '' : 'block'
    },
    closeMenu () {
      this.$refs.navItemsDiv.style.display = ''
    }
  }
}
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

a, button {
  outline: none !important;
}
body {
  background-color: #ebf8ff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
