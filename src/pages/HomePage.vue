<template>
  <section class="row justify-content-center">
    <GiftForm />
  </section>
  <section class="row py-3">
    <GiftCard v-for="g in gifts" :gift="g" />
  </section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { giftsService } from '../services/GiftsService.js';
import { AppState } from "../AppState.js";

export default {
  setup() {
    onMounted(() => {
      getGifts()
    })
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.gif {
  max-height: 30vh;
  min-height: 30vh;
}
</style>
