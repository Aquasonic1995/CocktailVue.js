<script setup lang="ts">

</script>

<template>
  <el-button class="backLink" type="primary"><slot></slot></el-button>
</template>

<style scoped lang="scss">
.backLink{
  position: absolute;
  top: 33px;
  left:  40%;
  font-family: 'Raleway', sans-serif;
}

</style>