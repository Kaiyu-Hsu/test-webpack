<template>
  <div class="hello">Hello {{ who }}</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      who: "Vue and Webpack !!",
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.hello {
  padding: 0.5em;
  font-size: 2em;
  background-color: #fcf;
}
</style>