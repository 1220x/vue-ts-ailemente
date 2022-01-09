<template>
    <aside
        class="el-aside"
        :class="{ width }"
    >
        <slot></slot>
    </aside>
</template>

<script lang="ts">
export default {
    name: 'ElAside'
}
</script>

<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
    width?: string
}

// withDefaults 用来设置属性的默认值
withDefaults(defineProps<Props>(), {
    width: '120px'
})
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>