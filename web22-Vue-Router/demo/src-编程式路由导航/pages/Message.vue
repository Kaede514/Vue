<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                 <router-link :to="{
                    path: '/home/message/detail',
                    query: {id: msg.id, title: msg.title}
                }">
                    {{msg.title}}
                </router-link>
                <button @click="pushShow(msg)">push查看</button>
                <button @click="replaceShow(msg)">replace查看</button>
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
        },
        methods: {
            pushShow(msg) {
                // push查看
                this.$router.push({
                    path: '/home/message/detail',
                    query: {id: msg.id, title: msg.title}
                });
            },
            replaceShow(msg) {
                // replace查看
                this.$router.replace({
                    path: '/home/message/detail',
                    query: {id: msg.id, title: msg.title}
                });
            }
        }
    }
</script>
