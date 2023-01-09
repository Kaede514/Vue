<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
    </div>
</template>

<script>
    export default {
        name: "App",
        components: {
        
        },
        methods: {
            getStudents() {
                this.$http.get('/app/mock/308965/students').then(resp => {
                    console.log(resp.data);
                }, error => {
                    console.log('请求发送失败：' + error.message);
                });
            }
        }
    }
</script>
