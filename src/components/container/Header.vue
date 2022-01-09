<template>
    <header
        calss="el-header"
        :style="{ height }"
    >
        <slot></slot>
    </header>
</template>

<script lang="ts">
export default {
    name: 'ElHeader'
}
</script>

<script setup lang="ts">

import { withDefaults } from 'vue';

interface Props {
    height?: string
}

// withDefaults 用来设置属性的默认值
withDefaults(defineProps<Props>(), {
    height: '60px'
})
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
@include b(header) {
    // padding: $--header-padding;
    padding: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    border: 1px solid #00ff00;
}
</style>

