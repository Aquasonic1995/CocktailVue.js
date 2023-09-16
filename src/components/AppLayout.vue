<template>

  <div class="root">
    <div class="img" :style="`background-image:url(${imgUrl})`"></div>
    <div class="main">
      <div class="random-wrapper">
        <button @click="router.push({name:'random'})">To the Random</button>
        <button @click="router.push({name:'cocktail', params: { id: id }})">To the Cocktail</button>
        <button @click="router.push({name:'home'})">To the Home</button>
        <el-button class="btn"  >Get a random cocktail</el-button>
      </div>
      <slot class="layout"></slot>
    </div>
  </div>

</template>

<script setup>

import router from "@/router";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})
const id = 2
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.root {
  display: flex;
  background: $background;
  min-height: 100vh;
}

.img {
  width: 40%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  z-index: 1;
}

.main {
  width: 60%;
  padding: 32px 40px
}
.random-wrapper {
  text-align: end;
}
.btn{
  color: $text;
  background: $accent;
  border:none;
  font-family: 'Raleway', sans-serif;
  &:active{
    transform: translateY(1px);
    filter: saturate(80%);
  }
}
</style>