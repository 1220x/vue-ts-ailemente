// getCurrentInstance 获取当前的实例。然后返回全局配置的 $AILEMENT，实现组件的全局配置
import { getCurrentInstance, ComponentInternalInstance } from "vue";

export function useGlobalConfig() {
    const instance:ComponentInternalInstance|null = getCurrentInstance();
    if (!instance) {
        console.log('useGlobalConfig必须得在setup里面整');
        return;
    }

    return instance.appContext.config.globalProperties.$AILEMENTE || {}
}