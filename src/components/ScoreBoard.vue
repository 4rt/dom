<template>
  <footer>
    <p class="current-score">Your score: {{ playerData.score }}</p>
    <p><i class="nes-logo"></i> Turn: {{ playerData.turn }}</p>
    <p class="highest-score"><i class="nes-icon trophy is-small"></i> Highest score: {{ playerData.highScore }}</p>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("common", ["playerData"])
  }
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
