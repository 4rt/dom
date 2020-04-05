<template>
  <section class="wrapper">
    <div id="shop">
      <div v-if="items">
        <div class="nes-table-responsive">
          <table class="nes-table is-bordered is-dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.cost }}<i class="nes-icon coin is-small"></i></td>
                <td>
                  <button type="button" class="nes-btn buy-btn" @click="buy(item.id)">Buy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <p>Sorry, shop is empty! Come again later.</p>
      </div>
      <button type="button" id="close-button" class="nes-btn" @click="$emit('close')">Close</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getItems, buyItem } from "@/services/shopService";
import { errorHandler } from "@/mixins/errorHandler";

export default {
  mixins: [errorHandler],
  computed: {
    ...mapGetters("shop", ["items"]),
    ...mapGetters("common", ["gameId"]),
  },
  methods: {
    ...mapActions("shop", ["setItems"]),
    ...mapActions("common", ["setPlayerData"]),
    fetchItems() {
      this.$store.dispatch("common/showLoading");
      getItems(this.gameId)
        .then((res) => {
          const { data } = res;
          this.setItems(data);
        })
        .catch((err) => this.handleError(err))
        .finally(() => this.$store.dispatch("common/hideLoading"));
    },
    buy(itemId) {
      buyItem({ gameId: this.gameId, itemId })
        .then((res) => {
          const { shoppingSuccess, ...playerData } = res.data;

          this.setPlayerData(playerData);

          if(!shoppingSuccess) {
            this.$modal.show({
              title: "Nope",
              text: "Nothing was purchased, what a bad day for shopping!"
            });
          } else {
            this.$modal.show({
              title: "Congratulations!",
              text: "You just had a superior shopping day."
            });
          }

        })
        .catch((err) => this.handleError(err))
        .finally(() => this.$store.dispatch("common/hideLoading"));
    }
  },
  mounted() {
    this.fetchItems();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: translate(-20px, -20px);
  background-color: rgba(0,0,0,0.9);
  overflow: auto;
}

#shop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  #close-button {
    margin: 20px 0;
  }
  td {
    padding: 10px;
  }
}
</style>
