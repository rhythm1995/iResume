<style scoped type="less">

</style>
<template>
    <div class="index">
        <div style="float: left;width: 20%;margin-top:20px;">
            <Sidebar></Sidebar>
        </div>
        <div style="float: left;width: 80%;margin-left: 20%">
            <Subject></Subject>
        </div>
    </div>
</template>
<script>
    import Sidebar from '../components/sidebar.vue';
    import Subject from '../components/subject.vue';
    export default {
        name: 'index',
        components: {
            Sidebar,
            Subject
        },
        methods: {

        }
    };
</script>