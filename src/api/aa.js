import Vue from 'vue'
import VueRouter from 'vue-router'
import MemberLogin from '@/pages/member/login'
import MemberIndex from '@/pages/member/index'
import HomeIndex from '@/pages/home/index'
import Recommend from '@/pages/home/recommend'
import Details from '@/pages/home/details'
import Notice from '@/pages/home/notice'
import BussinessDetails from '@/pages/home/business-details'
import ShopIndex from '@/pages/shop/index'
import WeikaIndex from '@/pages/weika/index'
import WeikaVip from '@/pages/weika/vip'
import WeikaReg from '@/pages/weika/reg'
import Regstep1 from '@/pages/member/reg/reg_step1'
import Regstep2 from '@/pages/member/reg/reg_step2'
import Regstep3 from '@/pages/member/reg/reg_step3'
import favourite from '@/pages/member/favourite' // 我的收藏
import exchange from '@/pages/member/exchange' // 我要兑换
import exchange_log from '@/pages/member/exchange_log' // 兑换记录
import points from '@/pages/member/points' // 我的积分
import points_log from '@/pages/member/points_log' // 积分记录
import myorder from '@/pages/member/myorder' // 积分记录
import help_list from '@/pages/article/help_list' // 帮助中心
import help_detail from '@/pages/article/help_detail' // 帮助详情
import WeikaPay from '@/pages/weika/pay'
import withdraw from '@/pages/weika/withdraw' // 提现
import withdraw_log from '@/pages/weika/withdraw_log' // 提现记录
import recommend_list from '@/pages/weika/recommend_list' // 推荐用户列表
import income from '@/pages/weika/income' // 佣金首页
import income_zhanji from '@/pages/weika/income_zhanji' // 查看战绩
import Food from '@/pages/home/food'
import Location from '@/pages/home/location'
import Map from '@/pages/home/map'
import Pay from '@/pages/home/pay'
import Choice from '@/pages/home/choice'
import ChoiceDetails from '@/pages/home/choice-details'
import Cookies from 'js-cookie'

const Author = () =>
  import('@/components/author')

const OptionsPageSetting = () =>
  import('@/components/optionPages/index')
const OptionPageFull = () =>
  import('@/components/optionPages/settingA')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/member',
    component: member,
    children: [{
      path: '/home/index',
      name: 'HomeIndex',
      component: HomeIndex,
      meta: {
        title: '首页'
      }
    },
    
    {
      path: '/home/recommend',
      name: 'Recommend',
      component: Recommend,
      meta: {
        title: '精品推荐 '
      }
    },
    {
      path: '/home/details',
      name: 'Details',
      component: Details,
      meta: {
        title: '商品详情页 '
      }
    }, {
      path: '/home/food',
      name: 'Food',
      component: Food,
      meta: {
        title: '美食'
      }
    }, {
      path: '/home/business-details',
      name: 'BussinessDetails',
      component: BussinessDetails,
      meta: {
        title: '商家详情'
      }
    }, {
      path: '/home/notice',
      name: 'Notice',
      component: Notice,
      meta: {
        title: '公告'
      }
    }, {
      path: '/home/location',
      name: 'Location',
      component: Location,
      meta: {
        title: '定位'
      }
    }, {
      path: '/home/map',
      name: 'Map',
      component: Map,
      meta: {
        title: '地图'
      }
    }, {
      path: '/home/pay',
      name: 'Pay',
      component: Pay,
      meta: {
        title: '消费买单'
      }
    }, {
      path: '/home/choice',
      name: 'Choice',
      component: Choice,
      meta: {
        title: '精选商家'
      }
    }, {
      path: '/home/choice-details',
      name: 'ChoiceDetails',
      component: ChoiceDetails,
      meta: {
        title: '商家详情'
      }
    }
    ]
  },
  {
    path: '/shop',
    component: shop,
    children: [{
      path: '/shop/index',
      name: 'ShopIndex',
      component: ShopIndex,
      meta: {
        title: '附近商家'
      }
    }]
  },
  {
    path: '/weika',
    component: weika,
    children: [{
      path: '/weika/index',
      name: 'WeikaIndex',
      component: WeikaIndex,
      meta: {
        title: '微卡首页'
      }
    },
    {
      path: '/weika/withdraw_log',
      name: 'withdraw_log',
      component: withdraw_log,
      meta: {
        title: '提现记录'
      }
    },
    {
      path: '/weika/withdraw',
      name: 'withdraw',
      component: withdraw,
      meta: {
        title: '提现'
      }
    },
    {
      path: '/weika/vip',
      name: 'WeikaVip',
      component: WeikaVip,
      meta: {
        title: '微卡vip首页'
      }
    },
    {
      path: '/weika/recommend_list',
      name: 'recommend_list',
      component: recommend_list,
      meta: {
        title: '我的推荐'
      }
    },
    {
      path: '/weika/income',
      name: 'income',
      component: income,
      meta: {
        title: '佣金首页'
      }
    },
    {
      path: '/weika/income_zhanji',
      name: 'income_zhanji',
      component: income_zhanji,
      meta: {
        title: '查看战绩'
      }
    },

    {
      path: '/weika/reg',
      name: 'WeikaReg',
      component: WeikaReg,
      meta: {
        title: '注册创客微卡'
      }
    }, {
      path: '/weika/pay',
      name: 'WeikaPay',
      component: WeikaPay,
      meta: {
        title: '微卡支付'
      }
    }
    ]
  },
  {
    path: '/member',
    component: member,
    children: [{
      path: '/member/login',
      name: 'MemberLogin',
      component: MemberLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/member/index',
      name: 'MemberIndex',
      component: MemberIndex,
      meta: {
        title: '个人中心'
      }
    }, {
      path: '/member/reg/reg_step1',
      name: 'Reg_step1',
      component: Regstep1,
      meta: {
        title: '注册创客-第一步'
      }
    },
    {
      path: '/member/reg/reg_step2',
      name: 'Reg_step2',
      component: Regstep2,
      meta: {
        title: '填写推荐人信息'
      }
    },
    {
      path: '/member/reg/reg_step3',
      name: 'Reg_step3',
      component: Regstep3,
      meta: {
        title: '填写个人信息'
      }
    }, {
      path: '/member/favourite',
      name: 'favourite',
      component: favourite,
      meta: {
        title: '我的收藏'
      }
    }, {
      path: '/member/exchange',
      name: 'exchange',
      component: exchange,
      meta: {
        title: '我要兑换'
      }
    }, {
      path: '/member/exchange_log',
      name: 'exchange_log',
      component: exchange_log,
      meta: {
        title: '兑换记录'
      }
    }, {
      path: '/member/points',
      name: 'points',
      component: points,
      meta: {
        title: '我的积分'
      }
    }, {
      path: '/member/points_log',
      name: 'points_log',
      component: points_log,
      meta: {
        title: '积分记录'
      }
    }, {
      path: '/member/myorder/:status',
      name: 'myorder',
      component: myorder,
      meta: {
        title: '帮助详情'
      }
    }
    ]
  },
  {
    path: '/article',
    component: article,
    children: [{
      path: '/article/help_list',
      name: 'help_list',
      component: help_list,
      meta: {
        title: '帮助中心'
      }
    }, {
      path: '/article/help_detail',
      name: 'help_detail',
      component: help_detail,
      meta: {
        title: '帮助详情'
      }
    }]
  },
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/options',
    component: OptionsPageSetting,
    children: [{
      path: '',
      component: OptionPageFull
    }]
  }
  ]
})

// ceshi cookie
router.beforeEach((to, from, next) => {
  // 判断是否已经登录且前往的页面不是登录页
  // 判断是否已经登录且前往的是登录页
  if ((to.path === '/options' || to.path === '/others') && !Cookies.get('access_token')) {
    next('/author')
  }
  next()
})

export default router
