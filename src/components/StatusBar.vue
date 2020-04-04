<template>
  <header>
    <div class="lives">
      <i :class="['nes-icon is-medium heart', { 'is-transparent': [playerData.lives] < 1 }]"></i>
      <i :class="['nes-icon is-medium heart', { 'is-transparent': [playerData.lives] < 2 }]"></i>
      <i :class="['nes-icon is-medium heart', { 'is-transparent': [playerData.lives] < 3 }]"></i>
    </div>
    <div class="level">
      Level: {{ playerData.gold }} <i class="nes-icon is-medium star"></i>
    </div>
    <div class="gold">
      <!-- TODO: check the fon size -->
      <span>{{ playerData.gold }}</span> <i class="nes-icon coin is-medium"></i>
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
