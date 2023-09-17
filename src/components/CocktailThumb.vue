<template>
  <RouterLink :to="`/cocktail/${id}`" @click="store.getCocktail(id)">
    <div class="cocktail-wrapper">
      <img :src="`${img}`" alt="cocktail">
      <div>{{ name }}</div>
    </div>
  </RouterLink>
</template>
<script setup>
import {coctailsStore} from "@/stores/root";

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
const store = coctailsStore()
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

img {
  width: 100px;
  height: 100px;
}

.cocktail-wrapper {
  text-align: center;
  font-size: 16px;
  color: $textMuted;
}
</style>