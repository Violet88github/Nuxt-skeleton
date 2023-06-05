import { defineNuxtPlugin } from '#app'
import { useInitStore } from '~/store/index'

export default defineNuxtPlugin(async () => {
    const main = useInitStore();
    main.fetch();
});
