<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'微卡首页'"></my-header>
    <div class="main">
      <div class="content">
        <div class="banner">
          <swiper :list="demo01_list" :aspect-ratio="460/750" dots-position="center" :show-desc-mask="false"></swiper>
          <div class="kaitong pd20">
              <div @click="_toOpen"><span>立即开通</span></div>
          </div>
        </div>
        <div class="fuwu">
          <div class="fuwu_tab">
            <div class="left">创客微卡特权服务</div>
            <div class="right">
              <a href="javascript:;">如何获得创客微卡</a>
            </div>
          </div>
          <div class="fuwu_con">
            <ul>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a1.png"></span>
                  <span>优惠购物</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a2.png"></span>
                  <span>线下消费</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a3.png"></span>
                  <span>分享赚钱</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a4.png"></span>
                  <span>1元疯抢</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a5.png"></span>
                  <span>免费体验</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a6.png"></span>
                  <span>我要领券</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a7.png"></span>
                  <span>专享活动</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a8.png"></span>
                  <span>邀请有礼</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
/*
 * @Author: jack
 * @Date: 2018-07-14 09:41:37
 * @Last Modified by: jack
 * @Last Modified time: 2018-07-20 10:12:34
 */
import { Swiper } from 'vux'
import { mapGetters, mapActions, mapMutations } from 'vuex'
const baseList = [
  {
    url: 'javascript:',
    img: require('../images/temp/banner01.jpg')
  },
  {
    url: 'javascript:',
    img: require('../images/temp/banner01.jpg')
  },
  {
    url: 'javascript:',
    img: require('../images/temp/banner01.jpg') // 404
  }
]
export default {
  data () {
    return {
      demo01_list: baseList
    }
  },
  computed: {
    ...mapGetters({getUser: 'userInfoGetter'})
  },
  methods: {
    _toOpen () {
      const _this = this
      if (this.getUser.id_card && this.getUser.real_name) {
        this.Wk_Query() // 有没有未完成的微卡订单
          .then(res => {
            if (res.data.exists === 1) { /* 已存在订单 */
              this.$vux.alert.show({
                content: '您有未完成的微卡订单',
                onHide () {
                  _this.$router.push({path: '/member/order/order_list/1'})
                }
              })
            } else {
              this.$router.push({path: '/weika/step1'})
            }
          })
          .catch(erro => {
            this.$vux.alert.show({
              content: erro.message,
              onConfirm () {
                _this.$router.go(0)
              }
            })
          })
      } else {
        this.$vux.toast.hide()
        this.$vux.toast.show({
          type: 'text',
          text: '请先实名认证',
          onHide () {
            _this.$router.push({path: '/member/realname', query: {status: true}})
          }
        })
      }
    },
    routeBack () {
      this.$router.push({path: '/home'})
    },
    ...mapActions(['Wk_Query'])
  },
  components: {
    Swiper
  }
}
</script>
<style lang="less" scoped>
.content {
  background: #f0f0f0;
}
.banner {
  background: #fff;
  .kaitong {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    span {
      display: block;
      background: #d1b358;
      height: 0.9rem;
      color: #fff;
      font-size: 0.32rem;
      border-radius: 1rem;
      text-align: center;
      line-height: 0.9rem;
      box-shadow: 0 4px 10px rgba(209, 179, 88, 0.5);
    }
  }
}
.fuwu {
  background: #fff;
  margin-top: 0.2rem;
  text-align: center;
  .fuwu_tab {
    padding: 0.1rem 0.2rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #E7E7E7 dashed 1px;
    .left {
      position: relative;
      font-size: 0.32rem;
      &::before {
        display: inline-block;
        position: absolute;
        left: -0.2rem;
        top: 25%;
        content: "";
        width: 0.06rem;
        background: #d1b358;
        height: 50%;
      }
    }
    .right a {
      color: #999;
    }
  }
  .fuwu_con {
    padding: 0.2rem;
    text-align: center;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 0.4rem 0;
        a {
          display: block;
          color: #333;
          span {
            display: block;
            img {
              width: 0.48rem;
              height: 0.48rem;
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
