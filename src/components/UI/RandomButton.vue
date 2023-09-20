<template>

<el-button @click="getRandomCocktail" class="btn" >Get a random cocktail</el-button>


</template>

<script setup>
import router from "@/router";
import {cocktailsStore} from "@/stores/root";
import {storeToRefs} from "pinia";
 const store = cocktailsStore()
const {cocktails, cocktail}=storeToRefs(store)
const getRandomCocktail = async () =>{
  cocktails.value=[]
  await store.getRandom()
  await  router.push({ name: 'cocktail', params: { id: cocktail?.value[0]?.idDrink}})
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