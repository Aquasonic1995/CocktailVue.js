<template>
 Cocktail
  <button @click="router.push('random')">To the Random</button>
  <button  @click="router.push('/')">To the Home</button>
</template>

<script setup>

import router from "@/router";
</script>

<style lang="scss" scoped>

</style>