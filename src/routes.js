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
        name: 'my-work.waiting-booking-receive'
      },
      children: [
        { 
          path: 'waiting-booking-receive', 
          name: 'my-work.waiting-booking-receive',
          component: () => import("./view/my-work/waiting-booking-receive/index.vue"),
        },
        { 
          path: 'waiting-booking-receive/create', 
          name: 'my-work.waiting-booking-receive-create',
          component: () => import("./view/my-work/waiting-booking-receive/detail.vue"),
        },
        { 
          path: 'waiting-booking-receive/:id', 
          name: 'my-work.waiting-booking-receive-edit',
          component: () => import("./view/my-work/waiting-booking-receive/detail.vue"),
        },
        { 
          path: 'booking-receive', 
          name: 'my-work.booking-receive',
          component: () => import("./view/my-work/booking-receive/index.vue"),
        },
        { 
          path: 'booking-receive/create', 
          name: 'my-work.booking-receive-create',
          component: () => import("./view/my-work/booking-receive/detail.vue"),
        },
        { 
          path: 'booking-receive/:id', 
          name: 'my-work.booking-receive-edit',
          component: () => import("./view/my-work/booking-receive/detail.vue"),
        },
        { 
          path: 'booking-out', 
          name: 'my-work.booking-out',
          component: () => import("./view/my-work/booking-out/index.vue"),
        },
        { 
          path: 'booking-out/create', 
          name: 'my-work.booking-out-create',
          component: () => import("./view/my-work/booking-out/detail.vue"),
        },
        { 
          path: 'booking-out/:id', 
          name: 'my-work.booking-out-edit',
          component: () => import("./view/my-work/booking-out/detail.vue"),
        }
      ]
    },
    { 
      path: '/subministry-work', 
      name: 'subministry-work',
      component: () => import("./view/subministry-work/index.vue"),
      redirect: {
        // name: 'subministry-work.booking-receive'
        name: 'subministry-work.record-receive'
      },
      children: [
        { 
          path: 'booking-receive', 
          name: 'subministry-work.booking-receive',
          component: () => import("./view/subministry-work/booking-receive/index.vue"),
        },
        { 
          path: 'booking-receive/create', 
          name: 'subministry-work.booking-receive-create',
          component: () => import("./view/subministry-work/booking-receive/detail.vue"),
        },
        { 
          path: 'booking-receive/:id', 
          name: 'subministry-work.booking-receive-edit',
          component: () => import("./view/subministry-work/booking-receive/detail.vue"),
        },
        { 
          path: 'record-receive', 
          name: 'subministry-work.record-receive',
          component: () => import("./view/subministry-work/record-receive/index.vue"),
        },
        { 
          path: 'record-receive/create', 
          name: 'subministry-work.record-receive-create',
          component: () => import("./view/subministry-work/record-receive/detail.vue"),
        },
        { 
          path: 'record-receive/:id', 
          name: 'subministry-work.record-receive-edit',
          component: () => import("./view/subministry-work/record-receive/detail.vue"),
        },
        { 
          path: 'booking-out', 
          name: 'subministry-work.booking-out',
          component: () => import("./view/subministry-work/booking-out/index.vue"),
        },
        { 
          path: 'booking-out/create', 
          name: 'subministry-work.booking-out-create',
          component: () => import("./view/subministry-work/booking-out/detail.vue"),
        },
        { 
          path: 'booking-out/:id', 
          name: 'subministry-work.booking-out-edit',
          component: () => import("./view/subministry-work/booking-out/detail.vue"),
        },
        { 
          path: 'record-out', 
          name: 'subministry-work.record-out',
          component: () => import("./view/subministry-work/record-out/index.vue"),
        },
        { 
          path: 'record-out/create', 
          name: 'subministry-work.record-out-create',
          component: () => import("./view/subministry-work/record-out/detail.vue"),
        },
        { 
          path: 'record-out/:id', 
          name: 'subministry-work.record-out-edit',
          component: () => import("./view/subministry-work/record-out/detail.vue"),
        }
      ]
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
      component: () => import("./view/master/book-type/detail.vue"),
    },
    { 
      path: '/master/book-record', 
      name: 'book-record',
      component: () => import("./view/master/book-record/index.vue"),
    },
    { 
      path: '/master/book-record/create', 
      name: 'book-record-create',
      component: () => import("./view/master/book-record/detail.vue"),
    },
    { 
      path: '/master/book-record/:id', 
      name: 'book-record-edit',
      component: () => import("./view/master/book-record/detail.vue"),
    },
    { 
      path: '/master/organization', 
      name: 'organization',
      component: () => import("./view/master/organization/index.vue"),
    },
    { 
      path: '/master/organization/create', 
      name: 'organization-create',
      component: () => import("./view/master/organization/detail.vue"),
    },
    { 
      path: '/master/organization/:id', 
      name: 'organization-edit',
      component: () => import("./view/master/organization/detail.vue"),
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
      component: () => import("./view/master/subministry/detail.vue"),
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
      component: () => import("./view/master/group/detail.vue"),
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
      component: () => import("./view/master/book-method/detail.vue"),
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