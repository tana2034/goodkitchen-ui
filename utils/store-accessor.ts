import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import RecipeModule from '~/store/recipe'

let recipeStore: RecipeModule

function initialiseStores(store: Store<any>): void {
  recipeStore = getModule(RecipeModule, store)
}

export { initialiseStores, recipeStore }
