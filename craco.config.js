module.exports = {
  style: {
    css: {
      modules: true,
    },
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/variables";
          @import "src/styles/mixin";
        `,
      },
    },
  },
};
