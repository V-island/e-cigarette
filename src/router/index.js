import VueRouter from 'vue-router'

// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = {
  mode: 'hash', //history
  routes: [
    {
      path: '/',
      name: 'Home',
      component: solve => require(['@/views/Home.vue'], solve)
    },
    {
      path: '/product',
      name: 'Product',
      component: solve => require(['@/views/Product.vue'], solve)
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: solve => require(['@/views/ProductDetail.vue'], solve)
    },
    {
      path: '/news',
      name: 'News',
      component: solve => require(['@/views/News.vue'], solve)
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: solve => require(['@/views/NewsDetail.vue'], solve)
    },
    {
      path: '/merchants',
      name: 'Merchants',
      component: solve => require(['@/views/Merchants.vue'], solve)
    },
    {
      path: '/about',
      name: 'About',
      component: solve => require(['@/views/About.vue'], solve)
    },
    {
      path: '/contact',
      name: 'Contact',
      component: solve => require(['@/views/Contact.vue'], solve)
    }
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 100)
    })
  }
};

// 构建VueRouter对象
let vueRouter = new VueRouter(router);
// 拦截路由，进行授权判断
vueRouter.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  next()
});

export default vueRouter;