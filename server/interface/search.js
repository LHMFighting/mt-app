import Router from 'koa-router';
import axios from './utils/axios'
import Poi from '../dbs/models/poi'
// import sign from './utils/sign'
let sign = 'abcd'
let router = new Router({
  prefix: '/search'
})

router.get('/top', async (ctx) => {
  try {
    let top = await Poi.find({
      'name': new RegExp(ctx.query.input),
      city: ctx.query.city
    })
    ctx.body = {
      code: 0,
      top: top.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      }),
      type: top.length ? top[0].type : ''
    }
  } catch (e) {
    console.log('出错');
    ctx.body = {
      code: -1,
      top: []
    }
  }

  // let {status, data: {
  //     top
  //   }} = await axios.get(`http://cp-tools.cn/search/top`, {
  //   params: {
  //     input: ctx.query.input,
  //     city: ctx.query.city,
  //     sign
  //   }
  // })
  // ctx.body = {
  //   top: status === 200
  //     ? top
  //     : []
  // }
})

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  try {
    let result = await Poi.find({
      city,
      // type: ctx.query.type || '景点'
      type: ctx.query.type || '丽人'
    }).limit(10)

    ctx.body = {
      code: 0,
      result: result.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      })
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      result: []
    }
  }
  // let city = ctx.store
  //   ? ctx.store.geo.position.city
  //   : ctx.query.city
  // let {status, data: {
  //     result
  //   }} = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
  //   params: {
  //     sign,
  //     city
  //   }
  // })
  // ctx.body = {
  //   result: status === 200
  //     ? result
  //     : []
  // }
})

router.get('/resultsByKeywords', async (ctx) => {
  // const {city, keyword} = ctx.query;
  // let {
  //   status,
  //   data: {
  //     count,
  //     pois
  //   }
  // } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
  //   params: {
  //     city,
  //     keyword,
  //     sign
  //   }
  // })
  // ctx.body = {
  //   count: status === 200 ? count : 0,
  //   pois: status === 200
  //     ? pois
  //     : []
  // }
  ctx.body = {
    count: 1,
    pois: [{
      type: '文物古迹',
      photos: [{
        url: 'https://p0.meituan.net/deal/201210/09/1_1009110059.jpg@220w_125h_1e_1c'
      }],
      name: '故宫',
      biz_ext: {
        rating: 95,
        cost: 100
      },
      tag: '景酒 背景合并就看见菲菲姐诶分解放军风机房IE发',
      tel: '18989583458',
      location: '109.50649, 18.23657',

    }, {
      type: '文物古迹2',
      photos: [{
        url: 'https://p0.meituan.net/travel/83544ca4b38bbe0f7644982c3528defd117921.jpg@220w_125h_1e_1c'
      }],
      name: '故宫2',
      biz_ext: {
        rating: 96,
        cost: 95
      },
      tag: '景酒2 背景合并就看见菲菲姐诶分解放军风机房IE发',
      tel: '189895222222',
      location: '116.46, 39.92',
    }]
  }
})

router.get('/products', async (ctx) => {
  // let keyword = ctx.query.keyword || '旅游'
  // let city = ctx.query.city || '北京'
  // let {
  //   status,
  //   data: {
  //     product,
  //     more
  //   }
  // } = await axios.get('http://cp-tools.cn/search/products', {
  //   params: {
  //     keyword,
  //     city,
  //     sign
  //   }
  // })
  // if (status === 200) {
  //   ctx.body = {
  //     product,
  //     more: ctx.isAuthenticated() ? more: [],
  //     login: ctx.isAuthenticated()
  //   }
  // }else{
  //   ctx.body = {
  //     product: {},
  //     more: ctx.isAuthenticated() ? more: [],
  //     login: ctx.isAuthenticated()
  //   }
  // }

  ctx.body = {
    product: {
      name: '海碗居北京菜',
      biz_ext: {
        rating: 96,
        cost: 95
      },
      address: '地址地址',
      photos: [{
        url: 'http://p1.meituan.net/poi/0545af7cd341622a60d2f7b6cbd312df24576.jpg@380w_214h_1e_1c',
        title: '图片'
      } , {
        url: 'https://p1.meituan.net/travel/57918668162cda545a37aa5d472e62e853125.jpg@220w_125h_1e_1c',
        title: '图片'
      }, {
        url: 'https://p0.meituan.net/wedding/923aa59d88a9a938765def152782611b115496.jpg@220w_125h_1e_1c',
        title: '图片'
      }],
      tel: '189895222222',
      location: '116.46, 39.92',
    },
    more: ctx.isAuthenticated() ?
      [{
        name: '干炸丸子',
        photos: [{
          url: 'http://p1.meituan.net/poirichness/menu_9226479_683602361.jpg@130w_130h_1e_1c',
          title: '图片'
        }],
        biz_ext: {
          ticket_ordering: '',
          rating: 96,
          cost: 95
        },
      }]
      : [],
    login: ctx.isAuthenticated()
  }
})

export default router
