<template>
  <div class="home">
    <div class="flex flex-wrap items-center content-center justify-around mt-3">
      <div v-for="(work, index) in works" :key="index" class="w-1/4 min-w-320 my-3 px-6 flex-1">
        <work-card :data="work"></work-card>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCard from '../components/WorkCard'

export default {
  name: 'Home',
  components: {
    WorkCard
  },
  data: () => ({
    works: [
      {
        details: ['frameless'],
        filename: 'corazon-blanco-y-negro.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Corazon en blanco y negro'
      }, {
        details: ['frameless'],
        filename: 'corazon-cristal.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Corazon de Cristal',
      }, {
        details: ['frameless'],
        filename: 'corazon.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Corazon',
      }, {
        details: ['frameless'],
        filename: 'diosa-del-fuego.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Diosa del fuego',
      }, {
        details: ['frameless'],
        filename: 'dualidad.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Dualidad',
      }, {
        details: ['frameless'],
        filename: 'elefante.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Elefante',
      }, {
        details: ['frameless'],
        filename: 'fluir.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Fluir',
      }, {
        details: ['frameless'],
        filename: 'magia.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Magia',
      }, {
        details: ['frameless'],
        filename: 'natacha.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Natacha',
      }, {
        details: ['frameless'],
        filename: 'yaguar.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Yaguar',
      }
    ]
  }),
  created () {
    this.works.sort(() => Math.random() - 0.5)
  }
}
</script>
