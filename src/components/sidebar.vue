<template>
    <div class="sidebar">
        <div class="sidebar_top">
            <h1></h1>
            <img :src="base.image" alt="" />
        </div>
        <div class="details">
            <h3>手机：</h3>
            <p>{{base.phone}}</p>
            <h3>邮箱：</h3>
            <p>
                <a :href="'Mailto:'+'{{base.email}}'">{{base.email}}</a>
            </p>
            <h3>微信：</h3>
            <p>{{base.wechat}}</p>
            <h3>个人博客：</h3>
            <p>
                <a :href="base.blog">{{base.blog}}</a>
            </p>
            <h3>GitHub：</h3>
            <p>
                <a :href="base.github">{{base.github}}</a>
            </p>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import jsonp from 'jsonp';

export default {
    name: 'sidebar',
    data() {
        return {
            base: {}
        };
    },
    methods: {

    },
    created() {
        jsonp('http://localhost:3000/data', null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                this.base = data[0].base;
            }
        });
    },
};
</script>

<style scoped>

</style>
