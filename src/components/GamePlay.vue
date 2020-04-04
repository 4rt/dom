<template>
  <section id="game-play">
    <status-bar />
    <tasks />
    <score-board />
  </section>
</template>

<script>
import StatusBar from "@/components/StatusBar";
import Tasks from "@/components/Tasks";
import ScoreBoard from "@/components/ScoreBoard";

export default {
  components: {
    StatusBar,
    Tasks,
    ScoreBoard
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
