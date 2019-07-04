
export default [{
  name: 'login',
  path: '/login',
  component: () => import('@/components/theme/login/login')
}, {
    name: '',
    path: '/',
    component: () => import('@/components/theme/left-main/Leftmain'),
    children: [{
        name: 'form',
        path: '/form',
        component: () => import('../component/FormSample')
      }, {
        name: 'table1',
        path: '/table1',
        component: () => import('../component/TableOne')
      }, {
        name: 'table2',
        path: '/table2',
        component: () => import('../component/TableTwo')
      }, {
        name: 'theme',
        path: '/theme',
        component: () => import('../component/ThemeSwitch')
      }, {
      name: 'test',
      path: '/test',
      component: () => import('../component/TestTalble')
    }, {
      name: 'testForm',
      path: '/testForm/:id',
      component: () => import('../component/TestForm'),
      props: true,
      // props: (route) => ({ id: route.query.id }),
      // props: (route) => ({ id: route.params.id }),
      children: [{
        name: 'tt',
        path: '/tt',
        component: () => import('../component/FormSample')
      }]
    }, {
      name: 'menuFunctions',
      path: '/menuFunctions',
      component: () => import('../../admin-module/component/MenuFunction/MenuFunctions')
    }, {
      name: 'menuFunction',
      path: '/menuFunction/:id',
      component: () => import('../../admin-module/component/MenuFunction/MenuFunction'),
      props: true
    }, {
      name: 'menutree',
      path: '/menutree',
      component: () => import('@/components/theme/TreeSetting/MenuTree'),
      props: true
    }, {
      name: 'menuRoleTree',
      path: '/menuRoleTree',
      component: () => import('@/components/theme/TreeSetting/MenuRoleTree'),
      props: true
    }
    ]
  }

]
