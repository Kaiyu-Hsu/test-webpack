<template>
  <div>this is child component</div>
</template>

<script>
const path = require("path");
const pathResolve = path.resolve(__dirname); // 取得當前資料夾的絕對路徑
const pathJoin = path.join(__dirname);

export default {
  mounted() {
    console.log(path.dirname(__filename));
  },
};
</script>