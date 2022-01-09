<template>
    <footer
        class="el-footer"
        :class="{ height }"
    >
    </footer>
</template>

<script lang="ts">
export default {
    name: 'ElFooter'
}
</script>

<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
    height?: string
}

withDefaults(defineProps<Props>(), {
    height: '120px'
})
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
@include b(footer) {
    padding: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>