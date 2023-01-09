<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link> -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- <router-link :to="{
                    // path: '/home/message/detail',
                    name: 'detail',
                    query: {id: msg.id, title: msg.title}
                }">
                    {{msg.title}}
                </router-link> -->
    
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link> -->
                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <router-link :to="{
                    // 对象写法中必须用name属性，不能使用path
                    name: 'detail',
                    params: {id: msg.id, title: msg.title}
                }">
                    {{msg.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                messageList: [
                    {id: '001', title: 'msg1'},
                    {id: '002', title: 'msg2'},
                    {id: '003', title: 'msg3'}
                ]
            }
        }
    }
</script>
