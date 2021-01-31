<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
    </div>
    <div>
      <span>ローカル疎通確認</span>
      <table>
        <tr>
          <th>タイトル</th>
        </tr>
        <tr v-for="recipe in recipes" :key="recipe.id">
          <td>{{ recipe.id }} {{ recipe.title }}</td>
        </tr>
      </table>
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
