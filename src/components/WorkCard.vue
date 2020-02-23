<template>
  <div class="max-w-sm m-auto rounded overflow-hidden shadow-lg bg-white border border-black">
    <div @click="$refs.modal.show()" class="m-3 border border-gray-400">
      <img class="w-full" :src="`/img/works/${data.filename}`" :alt="data.title">
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ data.title }}</div>
    </div>
    <t-modal ref="modal" :header="data.title" width="800" pivot-y=".5" body-class="py-0 px-4 flex-grow" header-class="px-6 py-3 border-b font-bold text-2xl">
      <img class="m-auto" :src="`/img/works/${data.filename}`" :alt="data.title">
      <div class="text-left pl-8 py-8 border-t">
        <p>{{ $t(data.medium) | capitalize }}</p>
        <p>{{ data.size_x }} x {{ data.size_y }} cm</p>
        <p>{{ data.details.map((i) => $t(i)).join(', ') | capitalize }}</p>
        <p class="font-bold">{{ data.price_euros }},00 €</p>
      </div>
    </t-modal>
  </div>
</template>

<script>
import TModal from 'vue-tailwind/src/components/TModal.vue'

export default {
  name: 'WorkCard',
  components: {
    TModal
  },
  props: {
    data: {
      type: Object
    }
  }
}
</script>
