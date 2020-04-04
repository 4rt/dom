import Modal from "./Modal";

const ModalPlugin = {
  install(Vue) {
    this.EventBus = new Vue();

    Vue.component("modal", Modal);

    Vue.prototype.$modal = {
      show(params) {
        ModalPlugin.EventBus.$emit("show", params);
      }
    };
  }
};

export default ModalPlugin;
