<script setup lang="ts">

</script>

<template>
<slot class="title"></slot>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.title {
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  text-align: center;
  position: relative;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 80px;

  &:after {
    position: absolute;
    bottom: -20px;
    left: 38%;
    content: '';
    width: 100px;
    height: 3px;
    background: $accent;
  }
}
</style>