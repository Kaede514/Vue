export default {
    install(Vue, a, b, c) {
        console.log('install...');
        console.log(a, b, c);
        // 全局过滤器
        Vue.filter('mySlice', (val) => {
            return val.slice(0, 4);
        });
        // 全局自定义指令
        Vue.directive('big2', (element, binding) => {
            console.log(element);
            console.log(binding);
            element.innerText = binding.value * 10;
        });
        // 定义混入
        Vue.mixin({
            mounted() {
                console.log('mounted...');
            },
            data() {
                return {
                    sex: '女'
                }
            }
        });
        // 给Vue原型添加方法
        Vue.prototype.hello = () => alert('hello');
    }
}
    