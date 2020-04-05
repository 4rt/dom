export const errorHandler = {
  methods: {
    handleError(err) {
      if (!err) return;

      this.$modal.show({
        title: "Error",
        text: err
      });
    }
  }
};
