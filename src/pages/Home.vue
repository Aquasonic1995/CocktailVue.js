<template>
  Home
  <div>
    <button @click="router.push('random')">To the Random</button>
    <button  @click="router.push('cocktail/1')">To the Cocktail</button>
  </div>
</template>

<script setup>

import router from "@/router";
</script>

<style lang="scss" scoped>

</style>