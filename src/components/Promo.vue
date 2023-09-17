<script setup lang="ts">

</script>

<template>
<div class="promo">
  <slot></slot>
</div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";
.promo {
  text-align: center;
  color: $textMuted;
  letter-spacing: 0.1em;
  line-height: 36px;
  margin-bottom: 60px;
}

</style>