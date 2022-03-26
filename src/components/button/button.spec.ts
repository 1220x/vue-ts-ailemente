import Button from './button.vue';
import { mount } from '@vue/test-utils'; // mount 函数可以在命令行里面 模拟vue组件的渲染

// describe函数给测试分组，it执行测试，expect语法执行断言

describe('测试按钮', () => {
    it('按钮能够显示测试文本', () => {
        const content = '滴滴滴';
        const wrapper = mount(Button, {
            slots: {
                default: content
            }
        })

        expect(wrapper.text()).toBe(content);
    })

    it('通过size属性控制大小', () => {
        const size = 'small';
        const wrapper = mount(Button, {
            props: {
                size
            }
        })

        // size 通过内部class控制
        expect(wrapper.classes()).toContain('el-button--small');
    })
})