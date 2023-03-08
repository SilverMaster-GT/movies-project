<template>
  <v-card
    color="#FF535B"
    theme="dark"
    @mouseenter="show = !show"
    @mouseleave="show = !show"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="props.peli.image"
      cover
    >
      <v-card-title>{{ props.peli.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4">{{ props.peli.year }}</v-card-subtitle>
    <v-card-actions class="text-right">
      <p>{{ !show ? 'Ver mas...' : '' }}</p>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-card-text class="text-justify">
          <div>
            {{ props.peli.content }}
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'

  const show = ref(false)

  const props = defineProps({
    peli: {
      type: Object,
      required: true,
    },
  })

  console.log(props)
</script>

<style scoped>
p {
  width: -webkit-fill-available;
}
</style>
