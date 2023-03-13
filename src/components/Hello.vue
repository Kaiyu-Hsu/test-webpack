<template>
  <div :class="$style.hello">
    Hello {{ who }}
    <h3 :class="$style.title">123</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Hello",
  components: {
    Child,
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
  background-color: #fcf;

  .title {
    color: red;
  }
}
</style>