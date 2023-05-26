<script setup lang="ts">


</script>

<template>
  <!-- 一级路由的位置 -->
  <RouterView />
  <div class="test">
    test scss
  </div>
  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
</template>


<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
