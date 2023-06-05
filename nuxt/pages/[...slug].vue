<template>
    <div>
      <h1>test</h1>
      <p>test</p>
    </div>
</template>

<script setup lang="ts">
import PageQuery from '~/graphql/queries/Page.gql'

async function page() {
    try {
        const res = await this.$apollo.query({
          query: PageQuery,
        });

        if (res) {
          this.loading = false;
          const { results } = res.data.characters;
          this.searchResults = results;
        }
      } catch (err) {
        this.loading = false;
        this.searchResults = [];
      }
}
</script>