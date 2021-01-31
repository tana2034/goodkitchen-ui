import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

type Recipe = {
  id: Number
  title: String
}

@Module({
  name: 'recipe',
  stateFactory: true,
  namespaced: true,
})
export default class RecipeModule extends VuexModule {
  private recipes: Recipe[] = []

  public get getRecipes() {
    return this.recipes
  }

  @Mutation
  private setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
  }

  @Action({ rawError: true })
  public async fetchRecipes() {
    await $axios.$get('http://localhost:3000/recipes').then((response) => {
      this.setRecipes(response)
    })
  }
}
