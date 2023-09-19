<script setup >

import router from "@/router";
</script>

<template>
  <el-button class="backLink" type="primary" @click="router.push({name:'home'})">Back</el-button>
</template>

<style scoped lang="scss">
.backLink{
  position: absolute;
  top: 33px;
  left:  40%;
  font-family: 'Raleway', sans-serif;
}

</style>