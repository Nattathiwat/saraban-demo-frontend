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
      path: '/my-work', 
      name: 'my-work',
      component: () => import("./view/my-work/index.vue"),
      redirect: {
        name: 'booking-receive'
      },
      children: [
        { 
          path: 'booking-receive', 
          name: 'booking-receive',
          component: () => import("./view/my-work/booking-receive/index.vue"),
        },
        { 
          path: 'booking-receive/create', 
          name: 'booking-receive-create',
          component: () => import("./view/my-work/booking-receive/detail.vue"),
        },
        { 
          path: 'booking-receive/:id', 
          name: 'booking-receive-edit',
          component: () => import("./view/my-work/booking-receive/detail.vue"),
        },
      ]
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
    { 
      path: '/master/book-type', 
      name: 'book-type',
      component: () => import("./view/master/book-type/index.vue"),
    },
    { 
      path: '/master/book-type/create', 
      name: 'book-type-create',
      component: () => import("./view/master/book-type/detail.vue"),
    },
    { 
      path: '/master/book-type/:id', 
      name: 'book-type-edit',
      // component: () => import("./view/master/book-type/detail.vue"),
    },
    { 
      path: '/master/organization', 
      name: 'organization',
      component: () => import("./view/master/organization/index.vue"),
    },
    { 
      path: '/master/organization/create', 
      name: 'organization-create',
      // component: () => import("./view/master/organization/detail.vue"),
    },
    { 
      path: '/master/organization/:id', 
      name: 'organization-edit',
      // component: () => import("./view/master/organization/detail.vue"),
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
      path: '/master/subministry', 
      name: 'subministry',
      component: () => import("./view/master/subministry/index.vue"),
    },
    { 
      path: '/master/subministry/create', 
      name: 'subministry-create',
      component: () => import("./view/master/subministry/detail.vue"),
    },
    { 
      path: '/master/subministry/:id', 
      name: 'subministry-edit',
      // component: () => import("./view/master/subministry/detail.vue"),
    },
    { 
      path: '/master/group', 
      name: 'group',
      component: () => import("./view/master/group/index.vue"),
    },
    { 
      path: '/master/group/create', 
      name: 'group-create',
      component: () => import("./view/master/group/detail.vue"),
    },
    { 
      path: '/master/group/:id', 
      name: 'group-edit',
      // component: () => import("./view/master/group/detail.vue"),
    },
    { 
      path: '/master/book-method', 
      name: 'book-method',
      component: () => import("./view/master/book-method/index.vue"),
    },
    { 
      path: '/master/book-method/create', 
      name: 'book-method-create',
      component: () => import("./view/master/book-method/detail.vue"),
    },
    { 
      path: '/master/book-method/:id', 
      name: 'book-method-edit',
      // component: () => import("./view/master/book-method/detail.vue"),
    },
    { 
      path: '/master/file', 
      name: 'file',
      component: () => import("./view/master/file/index.vue"),
    },
    { 
      path: '/master/file/create', 
      name: 'file-create',
      // component: () => import("./view/master/file/detail.vue"),
    },
    { 
      path: '/master/file/:id', 
      name: 'file-edit',
      // component: () => import("./view/master/file/detail.vue"),
    },
  ]
};