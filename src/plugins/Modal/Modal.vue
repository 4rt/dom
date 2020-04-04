<template>
  <div class="modal-wrapper" v-if="visible">
    <div class="modal nes-dialog">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <footer>
        <button type="button" class="nes-btn is-primary" @click="hide">
          Ok
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import ModalPlugin from "./ModalPlugin";

export default {
  data() {
    return {
      visible: false,
      title: "",
      text: ""
    };
  },
  methods: {
    hide() {
      this.visible = false;
    },
    show(params) {
      this.visible = true;
      this.title = params.title;
      this.text = params.text;
    }
  },
  beforeMount() {
    ModalPlugin.EventBus.$on("show", params => {
      this.show(params);
    });
  }
};
</script>

<style scoped lang="scss">
  .modal-wrapper {
    z-index: 4;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    .modal {
      margin: auto;
      border: 4px solid;
      padding: 1.5rem 2rem;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
      background: white;
    }
  }
</style>
