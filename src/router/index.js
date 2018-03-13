import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path: '/goback',
      redirect: '/'
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/hi',
      // component: Hi,
      // children: [
      //   {path: '/', component: Hi},
      //   {path: 'hi1', name: 'hi1', component: Hi1}, // 采坑 路径不用加 /
      //   {path: 'hi2', name: 'hi2', component: Hi2}
      // ]
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      },
      alias: '/wen'
    }
  ]
})
