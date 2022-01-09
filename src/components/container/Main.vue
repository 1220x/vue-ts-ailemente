<template>
    <section
        class="el-main"
    >
        <slot></slot>
    </section>
</template>

<script lang="ts">
export default {
    name: 'ElMain'
}
</script>

<script setup lang="ts">

</script>

<style  lang="scss">
@import '../../styles/mixin.scss';
@include b(main) {
    flex: 1 1;
}
</style>