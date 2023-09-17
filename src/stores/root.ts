import {defineStore} from 'pinia'

import axios from "axios";

export const useCounterStore = defineStore('root', {
    state: () => ({
        ingredients: [],
        cocktails: []
    }),
    actions: {
        async getIngredients() {
            const data = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
            )
            this.ingredients = data?.data?.drinks
        },
        async getCocktails(ingredient: any) {
            const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            )
            this.cocktails = data?.data?.drinks
        }
    }

})