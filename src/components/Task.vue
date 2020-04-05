<template>
  <article class="task nes-container is-dark with-title">
    <p class="title"><i class="nes-icon coin is-small"></i> {{ task.reward }}</p>
    <div class="description">
      <p>{{ task.message }}<br><small class="nes-text is-warning">({{ task.probability }})</small></p>
      <button type="button" class="nes-btn" @click="solve">Solve</button>
    </div>
  </article>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { solveTask } from "@/services/tasksService";
import { errorHandler } from "@/mixins/errorHandler";

export default {
  mixins: [errorHandler],
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters("common", ["gameId"]),
    task() {
      return this.$store.getters["tasks/task"](this.id);
    }
  },
  methods: {
    ...mapActions("common", ["setPlayerData"]),
    solve() {
      this.$store.dispatch("common/showLoading");
      solveTask({ gameId: this.gameId, taskId: this.id })
        .then((res) => {
          const { success, message, ...playerData } = res.data;

          this.$modal.show({
            title: success ? "Success" : "Oh Noes!",
            text: message
          });

          this.$emit("solved");
          this.setPlayerData(playerData);
        })
        .catch((err) => this.handleError(err))
        .finally(() => this.$store.dispatch("common/hideLoading"));
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  width: 300px;
  .description {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
