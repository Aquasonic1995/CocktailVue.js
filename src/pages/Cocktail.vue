<template>
  <app-layout name="/cocktail.jpg" class="layout">
    <BackButton/>
    <div class="wrapper"><Title>{{ cocktail[0]?.strDrink }}</Title>
      <ul>
        <li v-if="cocktail[0]?.strIngredient1"><img src="/src/assets/img/Heart.png" alt="heart">
          {{ cocktail[0]?.strIngredient1 }} | {{ cocktail[0]?.strMeasure1 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient2"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient2 }} |
          {{ cocktail[0]?.strMeasure2 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient3"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient3 }} |
          {{ cocktail[0]?.strMeasure3 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient4"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient4 }} |
          {{ cocktail[0]?.strMeasure4 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient5"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient5 }} |
          {{ cocktail[0]?.strMeasure5 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient6"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient6 }} |
          {{ cocktail[0]?.strMeasure6 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient7"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient7 }} |
          {{ cocktail[0]?.strMeasure7 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient8"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient8 }} |
          {{ cocktail[0]?.strMeasure8 }}
        </li>
        <li v-if="cocktail[0]?.strIngredient9"><img src="/src/assets/img/Heart.png" alt="heart"> {{ cocktail[0]?.strIngredient9 }} |
          {{ cocktail[0]?.strMeasure9 }}
        </li>
      </ul>
      <Promo>{{ cocktail[0]?.strInstructions }}</Promo>
    </div>

  </app-layout>
</template>

<script setup>

import AppLayout from "@/components/AppLayout.vue";
import BackButton from "@/components/UI/BackButton.vue";
import Title from "@/components/Title.vue";
import {storeToRefs} from "pinia";
import {cocktailsStore} from "@/stores/root";
import Promo from "@/components/Promo.vue";

const store = cocktailsStore()
const {cocktail} = storeToRefs((store))

</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

img {
  margin-right: 15px;

}

ul {
  color: $textMuted;
  list-style: none;
  margin-bottom: 50px;

  & li {
    margin-bottom: 20px;
  }
}
</style>