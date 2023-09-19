<template>
<el-button class="btn" @click="getRandomCocktail">Get a random cocktail</el-button>
</template>

<script setup>
import router from "@/router";
import {cocktailsStore} from "@/stores/root";
import {storeToRefs} from "pinia";
 const store = cocktailsStore()
const {cocktails}=storeToRefs(store)
const getRandomCocktail = () =>{
  router.push({name:'random'})
 cocktails.value=[]
 store.getRandom()
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
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