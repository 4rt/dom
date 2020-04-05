<template>
  <section id="start-game">
    <p class="nes-balloon from-left nes-pointer">Start The Game</p>
    <i class="nes-charmander"></i>
    <button type="button" class="nes-btn is-primary" @click="startGame()">Start!</button>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { start } from "@/services/commonService";
import { errorHandler } from "@/mixins/errorHandler";

export default {
  mixins: [errorHandler],
  methods: {
    ...mapActions("common", ["setPlayerData"]),
    startGame() {
      this.$store.dispatch("common/showLoading");
      start()
        .then((res) => {
          const { data } = res;
          this.setPlayerData(data);
        })
        .catch((err) => this.handleError(err))
        .finally(() => this.$store.dispatch("common/hideLoading"));
    }
  }
}
</script>

<style scoped lang="scss">
  #start-game {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      margin: 20px 0;
    }
  }
</style>
