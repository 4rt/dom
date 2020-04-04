<template>
  <section id="game-play">
    <status-bar @showShop="shopVisible = !shopVisible" />
    <shop v-show="shopVisible" @close="shopVisible = false" />
    <tasks />
    <score-board />
  </section>
</template>

<script>
import StatusBar from "@/components/StatusBar";
import Tasks from "@/components/Tasks";
import ScoreBoard from "@/components/ScoreBoard";
import Shop from "@/components/Shop";

export default {
  components: {
    StatusBar,
    Tasks,
    ScoreBoard,
    Shop
  },
  data() {
    return {
      shopVisible: false
    }
  }
}
</script>

<style scoped lang="scss">
#game-play {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
