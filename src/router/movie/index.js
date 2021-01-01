export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'nowplaying',
      component: () => import('@/components/Nowplaying')
    },
    {
      path: 'commingsoon',
      component: () => import('@/components/CommingSoon')
    },
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    }
  ]
}
