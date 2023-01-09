import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function() {
    // 实现鼠标打点相关的数据
    let point = reactive({
        x: 0, y: 0
    });

    // 实现鼠标打点相关的方法
    function fn(e) {
        point.x = e.pageX;
        point.y = e.pageY;
    };

    // 实现鼠标打点相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', fn);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('click', fn);
    });

    return point;
}
    