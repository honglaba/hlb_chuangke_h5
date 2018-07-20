import ajax from '@/api' // 配置后的axios
import Cookies from 'js-cookie'
import { client } from 'tools/client'

const actions = /* 公用 */{
  HTTP_Comment ({commit}, data) { // 评论
    return new Promise((resolve, reject) => {
      ajax.post('/api/shop/comments', {
        sid: data.sid,
        content: data.content,
        score: data.score
      },
      {
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_pay ({commit}, data) { // 支付试验
    return new Promise((resolve, reject) => {
      ajax.post('/api/pay-order', {
        price: data.money,
        sid: data.id,
        trade_type: 'WeixinJSBridge'
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_WxAccredit (redirect) { // 微信授权
    return new Promise((resolve, reject) => {
      ajax.get('/api/oauth/wechat', {
        params: {
          client: client(),
          redirect
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_UserInfo () { // 用户信息
    return new Promise((resolve, reject) => {
      ajax.get('/api/user/info', {
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }
      })
        .then(res => {
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_Children () { // 用户推荐人列表
    return new Promise((resolve, reject) => {
      ajax.get('/api/user/children?page=1')
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  }
}

export default actions
