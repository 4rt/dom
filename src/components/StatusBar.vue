<template>
  <header>
    <div class="lives">
      Lives: {{playerData.lives}}<i class="nes-icon is-medium heart"></i>
    </div>
    <div class="level">
      Level: {{ playerData.gold }}<i class="nes-icon is-medium star"></i>
    </div>
    <div class="gold">
      <span>{{ playerData.gold }}</span> <i class="nes-icon coin is-medium"></i>
    </div>
    <div class="shop">
      <button type="button" class="nes-btn is-success" @click="$emit('showShop')"><i class="nes-icon coin is-medium"></i>Shop</button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("common", ["playerData"])
  }
}
</script>

<style scoped lang="scss">
  header {
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    align-items: center;
  }
</style>
