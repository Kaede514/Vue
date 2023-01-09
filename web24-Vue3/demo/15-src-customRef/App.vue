<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
    import {ref, customRef} from "vue"

    export default {
        name: 'App',
        setup() {
            // 使用Vue提供的ref
            // let keyWord = ref('hello');
            // 使用自定义的ref
            function myRef(value, delay) {
                return customRef((track, trigger) => {
                    let timer;
                    return {
                        get() {
                            // 通知Vue追踪value的改变
                            track();
                            return value;
                        },
                        set(val) {
                            // 通知Vue重新解析模板
                            // trigger();
                            clearTimeout(timer);
                            timer = setTimeout(() => {
                                value = val;
                                trigger();
                            }, delay);
                        }
                    };
                });
            }
            let keyWord = myRef('hello', 500);
            
            return {
                keyWord
            }
        }
    }
</script>
