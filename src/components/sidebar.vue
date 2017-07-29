<template>
    <div class="sidebar">
        <div class="sidebar_top">
            <h1>{{username}}</h1>
            <img src="../images/avt.png" alt=""/>
        </div>
        <div class="details">
            <h3>手机：</h3>
            <p>{{phone}}</p>
            <h3>邮箱：</h3>
            <p><a :href="email">{{email}}</a></p>
            <h3>微信：</h3>
            <h3>{{wechat}}</h3>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        data () {
            return {
                username:'123',
                image:'',
                phone:'',
                email:'',
                wechat:''
            };
        },
        methods: {}
    };
</script>

<style scoped>

</style>
