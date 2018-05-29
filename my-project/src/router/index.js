import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Meta from '@/components/meta'

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
    }
  ]
})
