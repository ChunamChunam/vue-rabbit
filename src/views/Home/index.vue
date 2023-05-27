<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
    <HomePanel title="新鲜毫无1" subTitle="123">
        <div>主要内容</div>
    </HomePanel>
    <HomePanel title="新鲜毫无2">
        <div>主要内容2</div>
    </HomePanel>
</template>

<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'


</script>

<style lang="scss" scoped></style>