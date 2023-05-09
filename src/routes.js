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
        name: 'subministry-work.booking-receive'
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
      path: '/master', 
      name: 'master',
      redirect: {
        name: 'book-type'
      },
      children: [
        { 
          path: 'book-type', 
          name: 'book-type',
          component: () => import("./view/master/book-type/index.vue"),
        },
        { 
          path: 'book-type/create', 
          name: 'book-type-create',
          component: () => import("./view/master/book-type/detail.vue"),
        },
        { 
          path: 'book-type/:id', 
          name: 'book-type-edit',
          component: () => import("./view/master/book-type/detail.vue"),
        },
        { 
          path: 'record-type', 
          name: 'record-type',
          component: () => import("./view/master/record-type/index.vue"),
        },
        { 
          path: 'record-type/create', 
          name: 'record-type-create',
          component: () => import("./view/master/record-type/detail.vue"),
        },
        { 
          path: 'record-type/:id', 
          name: 'record-type-edit',
          component: () => import("./view/master/record-type/detail.vue"),
        },
        { 
          path: 'book-record', 
          name: 'book-record',
          component: () => import("./view/master/book-record/index.vue"),
        },
        { 
          path: 'book-record/create', 
          name: 'book-record-create',
          component: () => import("./view/master/book-record/detail.vue"),
        },
        { 
          path: 'book-record/:id', 
          name: 'book-record-edit',
          component: () => import("./view/master/book-record/detail.vue"),
        },
        { 
          path: 'organization', 
          name: 'organization',
          component: () => import("./view/master/organization/index.vue"),
        },
        { 
          path: 'organization/create', 
          name: 'organization-create',
          component: () => import("./view/master/organization/detail.vue"),
        },
        { 
          path: 'organization/:id', 
          name: 'organization-edit',
          component: () => import("./view/master/organization/detail.vue"),
        },
        { 
          path: 'agency', 
          name: 'agency',
          component: () => import("./view/master/agency/index.vue"),
        },
        { 
          path: 'agency/create', 
          name: 'agency-create',
          component: () => import("./view/master/agency/detail.vue"),
        },
        { 
          path: 'agency/:id', 
          name: 'agency-edit',
          component: () => import("./view/master/agency/detail.vue"),
        },
        { 
          path: 'subministry', 
          name: 'subministry',
          component: () => import("./view/master/subministry/index.vue"),
        },
        { 
          path: 'subministry/create', 
          name: 'subministry-create',
          component: () => import("./view/master/subministry/detail.vue"),
        },
        { 
          path: 'subministry/:id', 
          name: 'subministry-edit',
          component: () => import("./view/master/subministry/detail.vue"),
        },
        { 
          path: 'group', 
          name: 'group',
          component: () => import("./view/master/group/index.vue"),
        },
        { 
          path: 'group/create', 
          name: 'group-create',
          component: () => import("./view/master/group/detail.vue"),
        },
        { 
          path: 'group/:id', 
          name: 'group-edit',
          component: () => import("./view/master/group/detail.vue"),
        },
        { 
          path: 'book-method', 
          name: 'book-method',
          component: () => import("./view/master/book-method/index.vue"),
        },
        { 
          path: 'book-method/create', 
          name: 'book-method-create',
          component: () => import("./view/master/book-method/detail.vue"),
        },
        { 
          path: 'book-method/:id', 
          name: 'book-method-edit',
          component: () => import("./view/master/book-method/detail.vue"),
        },
        { 
          path: 'file', 
          name: 'file',
          component: () => import("./view/master/file/index.vue"),
        },
        { 
          path: 'file/create', 
          name: 'file-create',
          // component: () => import("./view/master/file/detail.vue"),
        },
        { 
          path: 'file/:id', 
          name: 'file-edit',
          // component: () => import("./view/master/file/detail.vue"),
        },
      ]
    },
    {
      path: '/automail', 
      name: 'automail',
      redirect: {
        name: 'automail-sendmail'
      },
      children: [
        { 
          path: 'sendmail', 
          name: 'automail-sendmail',
          component: () => import("./view/automail/sendmail/index.vue"),
        },
        { 
          path: 'sendmail/list/:id', 
          name: 'automail-sendmail-list',
          component: () => import("./view/automail/sendmail/list.vue"),
        },
        { 
          path: 'sendmail/:id', 
          name: 'automail-sendmail-edit',
          component: () => import("./view/automail/sendmail/detail.vue"),
        },
        { 
          path: 'sendmail-logs', 
          name: 'automail-sendmail-logs',
          component: () => import("./view/automail/sendmail-logs/index.vue"),
        },
        {
          path: 'master', 
          name: 'automail-master',
          redirect: {
            name: 'automail-mail-addresses'
          },
          children: [
            { 
              path: 'mail-addresses', 
              name: 'automail-mail-addresses',
              component: () => import("./view/automail/master/mail-addresses/index.vue"),
            },
            { 
              path: 'receiver-profile', 
              name: 'automail-receiver-profile',
              component: () => import("./view/automail/master/receiver-profile/index.vue"),
            },
            { 
              path: 'receiver-profile/create', 
              name: 'automail-receiver-profile-create',
              component: () => import("./view/automail/master/receiver-profile/detail.vue"),
            },
            { 
              path: 'receiver-profile/:id', 
              name: 'automail-receiver-profile-edit',
              component: () => import("./view/automail/master/receiver-profile/detail.vue"),
            },
          ]
        },
      ]
    }
  ]
};