<template>
  <app-layout imgUrl="/Cocktail.png" class="layout">
    <back-button @click="router.push({name:'home'})">Back</back-button>
 <Title></Title>
  </app-layout>
</template>

<script setup>

import AppLayout from "@/components/AppLayout.vue";
import BackButton from "@/components/UI/BackButton.vue";
import router from "@/router";
import Title from "@/components/Title.vue";
</script>

<style lang="scss" scoped>

</style>