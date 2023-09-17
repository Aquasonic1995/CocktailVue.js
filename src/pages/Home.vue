<template>
  <app-layout imgUrl="/src/assets/img/bg-home.jpg">
    <div class="wrapper" v-if="cocktails.length===0">

      <div class="title">Choose your drink</div>
      <el-select class="select"
                 v-model="ingredient"
                 placeholder="Choose main ingredient"
                 @change="store.getCocktails(ingredient)"
      >
        <el-option
            v-for="item in ingredients"
            :key="item.strIngredient1"
            :label="item.strIngredient1"
            :value="item.strIngredient1"
        />
      </el-select>
      <div class="promo"><p>Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
        ingredient through our
        <br> cocktail generator.</p></div>
      <img src="/Cocktails.png" alt="Cocktails">
    </div>
    <div class="wrapper" v-else>
      <el-button @click="backToSelect" class="backLink" type="primary">Back</el-button>
      <div class="title">Cocktails with {{ ingredient }}</div>
      <div class="cocktails">
        <CocktailItem v-for="cocktail in cocktails"
                      :id="cocktail.idDrink"
                      :thumbNail="cocktail.strDrinkThumb"
                      :name="cocktail.strDrink"
        />


      </div>
    </div>

  </app-layout>
</template>

<script setup>
import {onMounted, ref} from "vue";
import AppLayout from "@/components/AppLayout.vue";
import {useCounterStore} from "@/stores/root";
import {storeToRefs} from "pinia";

const store = useCounterStore()
onMounted(store.getIngredients)
const {ingredients, cocktails} = storeToRefs((store))
const ingredient = ref('')

const backToSelect = () => {
  cocktails.value = []
  store.getIngredients()
  ingredient.value = ''
}
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

.promo {
  text-align: center;
  color: $textMuted;
  letter-spacing: 0.1em;
  line-height: 36px;
  margin-bottom: 60px;
}

img {
  margin-left: auto;
  margin-right: auto;
  max-width: 345px;
}

.cocktails {
  max-height: 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;

  & img {
    width: 100px;
    height: 100px;
  }
}
</style>