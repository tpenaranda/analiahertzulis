<template>
  <div class="max-w-sm m-auto rounded overflow-hidden shadow-lg bg-white border border-black">
    <div @click="$emit('imgClick', data)" class="m-3 border border-gray-400 rounded overflow-hidden">
      <img class="w-full h-auto min-h-200" :src="`/img/works/${data.filename}`">
    </div>
    <div class="px-6 py-4">
      <div class="font-montserrat font-bold text-xl mb-2">{{ data.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    data: {
      type: Object
    },
    imgClickHandler: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
