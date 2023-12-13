<template>
  <div>
    <NuxtWelcome/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({

})
const query = gql`
  query GetPageBySlug($slug: String!) {
    readOnePage(filter: { title: { eq: $slug } }) {
      id
      title
      content
    }
  }
`
const variables = { slug: 'home' }
const { data } = await useAsyncQuery(query, variables)
</script>
