<template>
  <div class="col-6 col-md-3 mb-2">
    <div class="rounded elevation-2 bg-light darken-30" @click="openGift(gift.id)">
      <img v-if="(gift.opened == false)" class="img-fluid rounded-top gif"
        src="https://media.istockphoto.com/id/1152848595/vector/isometric-gift-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=6_69uzGDhk5B1p9v8T_W_367qq0vUKypA1pkPoauk-U="
        alt="">
      <img v-else class="img-fluid rounded-top gif" :src="gift.url" alt="">
      <div class="p-2">
        <h5 class="fw-bold text-center">{{ gift.tag }}</h5>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
export default {
  props: { gift: Gift },
  setup() {
    //NOTE - Not what you want to do. If user has to interact w/ the function you want it in the return.
    //NOTE - watch effects and onMounted goes in setup because those are changing the page load.
    // async function openGift(id) {
    //   const res = await giftsService.openGift(id)
    return {
      async openGift(id) {
        await giftsService.openGift(id)
      }
      //NOTE - 
      // openGift
    }
  }
};
</script>


<style lang="scss" scoped>

</style>