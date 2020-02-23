<template>
  <div class="home">
    <div class="flex flex-wrap items-center content-center justify-around mt-2">
      <div v-for="(work, index) in works" :key="index" class="w-1/4 min-w-320 my-4 lg:my-8 px-4 lg:px-8">
        <work-card :data="work" @imgClick="handleImageClick"></work-card>
      </div>
    </div>
    <t-modal ref="modal" :header="modalData.title" width="800" :pivot-y=".5" body-class="flex-grow" header-class="font-montserrat p-1 border-b font-bold text-2xl">
      <img class="m-auto px-4" :src="`/img/works/${modalData.filename}`" :alt="modalData.title">
      <div class="text-left p-8 border-t">
        <p>{{ $t(modalData.medium) | capitalize }}</p>
        <p>{{ modalData.size_x }} x {{ modalData.size_y }} cm</p>
        <p>{{ modalData.details.map((i) => $t(i)).join(', ') | capitalize }}</p>
        <p class="font-bold">{{ modalData.price_euros }},00 €</p>
      </div>
    </t-modal>
  </div>
</template>

<script>
import TModal from 'vue-tailwind/src/components/TModal.vue'
import WorkCard from '../components/WorkCard'

export default {
  name: 'Home',
  components: {
    TModal,
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
        title: 'Corazón en blanco y negro'
      }, {
        details: ['frameless'],
        filename: 'corazon-cristal.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Corazón de Cristal'
      }, {
        details: ['frameless'],
        filename: 'corazon.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Corazón'
      }, {
        details: ['frameless'],
        filename: 'diosa-del-fuego.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Diosa del fuego'
      }, {
        details: ['frameless'],
        filename: 'dualidad.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Dualidad'
      }, {
        details: ['frameless'],
        filename: 'elefante.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Elefante'
      }, {
        details: ['frameless'],
        filename: 'fluir.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Fluir'
      }, {
        details: ['frameless'],
        filename: 'magia.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Magia'
      }, {
        details: ['frameless'],
        filename: 'natacha.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Natacha'
      }, {
        details: ['frameless'],
        filename: 'yaguar.jpg',
        medium: 'tempera_on_paper',
        price_euros: '120',
        size_x: '32.5',
        size_y: '45.8',
        title: 'Yaguar'
      }
    ],
    modalData: {
      details: []
    }
  }),
  created () {
    this.works.sort(() => Math.random() - 0.5)
  },
  methods: {
    handleImageClick (data) {
      this.modalData = data
      this.$refs.modal.show()
    }
  }
}
</script>
