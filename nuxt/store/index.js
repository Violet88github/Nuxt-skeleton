import { defineStore } from 'pinia'

export const useInitStore = defineStore('store', () => {
  const main = {};
  const currentPage = {};

  async function fetch(query) {
    let apiTarget = 'api/common'

    if (query.stage) {
      const queryString = `?stage=${query.stage}`
      apiTarget += queryString
    }

    const { data } = await $axios.get(apiTarget);
    main.value = data;
  };

  function setCurrentPage(page) {
    currentPage.value = page;
  };

  function setCommenData(data) {
    main.value = data;
  }

  return { main, currentPage, fetch, setCurrentPage };
})
