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
      path: '/master/agency', 
      name: 'agency',
      component: () => import("./view/master/agency/index.vue"),
    },
    { 
      path: '/master/agency/create', 
      name: 'agency-create',
      component: () => import("./view/master/agency/detail.vue"),
    },
    { 
      path: '/master/agency/:id', 
      name: 'agency-edit',
      component: () => import("./view/master/agency/detail.vue"),
    },
    { 
      path: '/user-manage', 
      name: 'user-manage',
      component: () => import("./view/user-manage/index.vue"),
    },
    { 
      path: '/user-manage/create', 
      name: 'user-manage-create',
      component: () => import("./view/user-manage/detail.vue"),
    },
    { 
      path: '/user-manage/:id', 
      name: 'user-manage-edit',
      component: () => import("./view/user-manage/detail.vue"),
    },
  ]
};