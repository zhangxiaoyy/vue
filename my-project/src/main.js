// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 页面title
router.beforeEach((to, from, next) => {
  console.log(to)
  // 获得路由中path路径
  let urlpath = to.matched[0].path.split("/");
  let titlenum = "";
  let contentnum = "";
  // 判断是否含有分享标题 和描述
  for(var index = 0 ;index<urlpath.length;index++){
    if(urlpath[index] == ":shareTitle"){
      titlenum = index;
    }
    if(urlpath[index] == ":shareContent"){
      contentnum = index;
    }
  }
  /* 路由发生变化修改页面meta  用于控制原生分享按钮显示*/
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    // 获得页面url数组
    let urlarr = to.path.split("/");
    // 加多条meta
    for(var i=0;i<to.meta.content.length;i++){
      let meta = document.createElement('meta');
      meta.name = to.meta.name[i];
      // 如果meta中 有分享 标题 和描述 就加上 content
      if(meta.name == "sharetitle"){
        if(titlenum){
          meta.content = decodeURIComponent(urlarr[titlenum]);
        }else{
          meta.content = to.meta.content[i]
        }
      }else if(meta.name == "sharecontent"){
        if(contentnum){
          meta.content = decodeURIComponent(urlarr[contentnum]);
        }else{
          meta.content = to.meta.content[i]
        }
      }else{
        meta.content = to.meta.content[i];
      }
      head[0].appendChild(meta)
    }
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

