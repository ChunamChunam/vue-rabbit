import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'


// import { getCategory } from '@/apis/testAPI'

// getCategory().then(res => {
//     console.log(res);
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

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
                }
            },
        )
    }
})


app.mount('#app')