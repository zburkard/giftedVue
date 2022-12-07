import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await giftApi.get()
    logger.log('GOT GIFTS', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async openGift(id) {
    let selectedGift = AppState.gifts.find(g => g.id == id)
    selectedGift.opened = !selectedGift.opened
    // selectedGift.opened = true
    const res = await giftApi.put(id, selectedGift)
    let index = AppState.gifts.findIndex(g => g.id == id)
    AppState.gifts.splice(index, 1, new Gift(res.data))
  }

  async createGift(giftData) {
    const res = await giftApi.post('https://bcw-sandbox.herokuapp.com/api/gifts', giftData)
    AppState.gifts = [new Gift(res.data), ...AppState.gifts]
  }
}

export const giftsService = new GiftsService()