export default {
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'PageNotFound',
      component: () => import("./view/pageNotFound.vue"),
    },
    { 
      path: '/', 
      redirect: '/login',
    },
    { 
      path: '/login', 
      name: 'login',
      component: () => import("./view/login/index.vue"),
    },
    { 
      path: '/booking-receive', 
      name: 'booking-receive',
      component: () => import("./view/booking-receive/index.vue"),
    },
    { 
      path: '/booking-receive/create', 
      name: 'booking-receive-create',
      component: () => import("./view/booking-receive/detail.vue"),
    },
    { 
      path: '/booking-receive/:id', 
      name: 'booking-receive-edit',
      component: () => import("./view/booking-receive/detail.vue"),
    },
    { 
      path: '/booking-out', 
      name: 'booking-out',
      component: () => import("./view/booking-out/index.vue"),
    },
    { 
      path: '/booking-out/create', 
      name: 'booking-out-create',
      component: () => import("./view/booking-out/detail.vue"),
    },
    { 
      path: '/booking-out/:id', 
      name: 'booking-out-edit',
      component: () => import("./view/booking-out/detail.vue"),
    },
    { 
      path: '/user-manage/department', 
      name: 'department',
      component: () => import("./view/user-manage/department/index.vue"),
    },
    { 
      path: '/user-manage/department/create', 
      name: 'department-create',
      component: () => import("./view/user-manage/department/detail.vue"),
    },
    { 
      path: '/user-manage/department/:id', 
      name: 'department-edit',
      component: () => import("./view/user-manage/department/detail.vue"),
    },
    { 
      path: '/user-manage/user', 
      name: 'user',
      component: () => import("./view/user-manage/user/index.vue"),
    },
    { 
      path: '/user-manage/user/create', 
      name: 'user-create',
      component: () => import("./view/user-manage/user/detail.vue"),
    },
    { 
      path: '/user-manage/user/:id', 
      name: 'user-edit',
      component: () => import("./view/user-manage/user/detail.vue"),
    },
  ]
};