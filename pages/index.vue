<template>
  <section class="section">
    <div>
      <magic-grid>
        <card
          v-for="recipe in recipes"
          :key="recipe.id"
          :title="recipe.title"
          :body="recipe.description"
        />
      </magic-grid>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import { recipeStore } from '~/store'

export default {
  name: 'HomePage',

  components: {
    Card,
  },
  async asyncData({ error }) {
    try {
      await recipeStore.fetchRecipes()
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.data.message,
      })
    }
  },
  computed: {
    recipes() {
      return recipeStore.getRecipes
    },
  },
}
</script>
