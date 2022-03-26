<template>
    <button
        class="el-button"
        :class="[
            buttonSize ? `el-button--${buttonSize}` : '',
            type ? `el-button--${type}` : ''
        ]"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
export default {
    name: 'ElButton'
}
</script>

<script setup lang="ts">
import { computed, withDefaults } from 'vue';
import { useGlobalConfig } from '../../util'; 

interface Props {
    size? : '' | 'small' | 'medium' | 'large',
    type? : '' | 'primary' | 'success' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
    size: '',
    type: ''
})

const globalConfig = useGlobalConfig();
const buttonSize = computed(() => {
    return props.size || globalConfig.size;
})


</script>

<style scoped lang="scss">
@import '../styles/mixin.scss';

@include b(button) {
    display: inline-block;
    cursor: pointer;
    background: $--button-default-background-color;
    color: $--button-default-font-color;
    @include button-size (
        $--button-padding-vertical,
        $--button-padding-horizontal,
        $--button-font-size,
        $--button-border-radius
    );
    @include m(small) {
        @include button-size (
            $--button-medium-padding-vertical,
            $--button-medium-padding-horizontal,
            $--button-medium-font-size,
            $--button-medium-border-radius
        )
    }
    @include m(large) {
        @include button-size (
            $--button-large-padding-vertical,
            $--button-large-padding-horizontal,
            $--button-large-font-size,
            $--button-large-border-radius
        )
    }
}
</style>