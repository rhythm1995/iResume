const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},
    {
        path: '/admin',
        meta: {
            title: 'admin'
        },
        component: (resolve) => require(['./views/admin.vue'], resolve)
    }];
export default routers;