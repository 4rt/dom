<template>
  <section class="tasks" v-if="tasks">
    <task v-for="task in tasks" :key="task.adId" :id="task.adId" @solved="fetchTasks" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getTasks } from "@/services/tasksService";
import Task from "@/components/Task";

export default {
  components: {
    Task
  },
  computed: {
    ...mapGetters("common", ["gameId", "playerData"]),
    ...mapGetters("tasks", ["tasks"])
  },
  methods: {
    ...mapActions("tasks", ["setTasksData"]),
    ...mapActions("common", ["setPlayerData"]),
    fetchTasks() {
      this.$store.dispatch("common/showLoading");
      getTasks(this.gameId)
        .then((res) => {
          const { data } = res;
          this.setTasksData(data);
        })
        .catch((err) => {
          console.error(err);
          if(err.response && err.response.status === 410) {
            const playerData = {
              gameId: null,
              level: null,
              lives: null,
              gold: null,
              score: null,
              highScore: null,
              turn: 0,
            };

            this.$modal.show({
              title: "Game Over!",
              text: "This is it, you lost, try again!"
            });

            this.setPlayerData(playerData);
          }
        })
        .finally(() => this.$store.dispatch("common/hideLoading"));
    }
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px;
}
</style>
