<style scoped type="less">

</style>
<template>
    <div class="index">
        <Sidebar></Sidebar>
    </div>
</template>
<script>
    import Sidebar from '../components/sidebar.vue';
    export default {
        name:'index',
        components: {
            Sidebar
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>