
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
      path: '/testForm',
      component: () => import('../component/TestForm'),
      props: (route) => ({ rowData: route.params.rowData })
    }
    ]
  }

]
