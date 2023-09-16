
import { defineStore } from 'pinia'

import axios from "axios";

export const useCounterStore = defineStore('root', {
state:()=>({
ingredients:[]
}),
  actions:{
  async getIngredients(){
    const data = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    )
    this.ingredients=data?.data?.drinks
  }
  }

} )