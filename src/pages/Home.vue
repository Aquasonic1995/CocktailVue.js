<template>
  <app-layout imgUrl="/src/assets/img/bg-home.jpg" >
    <div class="wrapper">
      <div class="title">Choose your drink</div>
      <el-select class="select" v-model="ingredient" placeholder="Choose main ingredient">
        <el-option
            v-for="item in ingredients"
            :key="item.strIngredient1"
            :label="item.strIngredient1"
            :value="item.strIngredient1"

        />
      </el-select>
      <div class="promo"><p>Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our
        <br> cocktail generator.</p></div>
    </div>

  </app-layout>
</template>

<script setup>
import {onMounted, ref} from "vue";
const store = useCounterStore()
onMounted(store.getIngredients)
const {ingredients} = storeToRefs((store))
const ingredient = ref(null)
import AppLayout from "@/components/AppLayout.vue";
import {useCounterStore} from "@/stores/root";
import {storeToRefs} from "pinia";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.select {
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  color: $text;
  border: 1px solid $text;
  margin-bottom: 60px;
}
.promo{
  text-align: center;
  color:$textMuted;
  letter-spacing: 0.1em;
  line-height: 36px;
}

</style>