// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 注册全局指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el：指令绑定到的元素。这可以用于直接操作 DOM。
                // binding：一个对象，包含以下属性。
                console.log(el, binding.value)
                useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting);
                        if (isIntersecting) {
                            // 进入可视区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}