<template>
  <main id="app">
    <preloader v-show="loading" />
    <modal />
    <game-play v-if="playerData.gameId" />
    <game-starter v-else />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Preloader from "@/components/Preloader";
import GamePlay from "@/components/GamePlay";
import GameStarter from "@/components/GameStarter";

export default {
  components: {
    Preloader,
    GamePlay,
    GameStarter,
  },
  computed: {
    ...mapGetters("common", ["loading", "playerData"])
  },
  mounted() {
    document.getElementById("preloader").style.display = "none";
  }
}
</script>

<style lang="scss">
@import "~nes.css/css/nes.css";
html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  background-color: darkturquoise;
  overflow: auto;
}
</style>
