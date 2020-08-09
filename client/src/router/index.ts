const RouterConfig = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/Home')
  },
  {    
    path: '/signin',
    component: () => import('@/pages/SignIn')
  }
]

export default RouterConfig