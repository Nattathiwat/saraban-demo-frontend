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
      path: '/import-book', 
      name: 'import-book',
      component: () => import("./view/import-book/index.vue"),
    },
    { 
      path: '/import-book/create', 
      name: 'import-book-create',
      component: () => import("./view/import-book/detail.vue"),
    },
    { 
      path: '/import-book/:id', 
      name: 'import-book-edit',
      component: () => import("./view/import-book/detail.vue"),
    },
    { 
      path: '/export-book', 
      name: 'export-book',
      component: () => import("./view/export-book/index.vue"),
    },
    { 
      path: '/export-book/create', 
      name: 'export-book-create',
      component: () => import("./view/export-book/detail.vue"),
    },
    { 
      path: '/export-book/:id', 
      name: 'export-book-edit',
      component: () => import("./view/export-book/detail.vue"),
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