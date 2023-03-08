<template>
  <div :class="$style.hello">
    Hello {{ who }}
    <h3 :class="$style.title">123</h3>
    <!-- test element-ui style -->
    <!-- <el-button>click it</el-button> -->
    <PageTable></PageTable>
  </div>
</template>

<script>
import PageTable from "./PageTable.vue";

export default {
  name: "Hello",
  components: {
    PageTable,
  },
  data() {
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

  .title {
    color: red;
  }
}
</style>