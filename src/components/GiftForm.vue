<template>
  <div class="col-6">
    <form action="" @submit.prevent="createGift">
      <input type="text" class="form-control" name="tag" v-model="editable.tag" placeholder="Tag">
      <input type="text" class="form-control" name="url" v-model="editable.url" placeholder="GIF Url">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createGift() {
        try {
          await giftsService.createGift(editable.value)
          editable.value = {}
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>