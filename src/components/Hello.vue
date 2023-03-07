<template>
  <div :class="$style.hello">
    Hello {{ who }}
    <h3 :class="$style.title">123</h3>
    <!-- test element-ui style -->
    <!-- <el-button>click it</el-button> -->
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      who: "Vue and Webpack !!",
    };
  },
  mounted() {
    console.log(this.$style);
  },
};
</script>

<style lang="scss" module scoped>
.hello {
  padding: 0.5em;
  font-size: 2em;
  background-color: #fcf;

  .title {
    color: red;
  }
}
</style>