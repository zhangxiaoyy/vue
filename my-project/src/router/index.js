import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Meta from '@/components/meta'
import Grid from '@/components/iview/Grid'
import Layout from '@/components/iview/Layout'
import Button from '@/components/iview/Button'
import Icon from '@/components/iview/Icon'
import From from '@/components/iview/From'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页入口',
        content:[
          'aaa',
          'bbb',
          "0"
        ],
        name:[
          'sharetitle',
          'sharecontent',
          'share'
        ]
      }
    },
    {
      path: '/meta/:shareTitle/:shareContent',
      name: 'Meta',
      component: Meta,
      meta: {
        title: 'meta分享',
        content:[
          '',
          '',
          "0"
        ],
        name:[
          'sharetitle',
          'sharecontent',
          'share'
        ]
      }
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/From',
      name: 'From',
      component: From
    }
  ]
})
