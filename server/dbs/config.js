export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get prot () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '2585283373@qq.com'  // qq邮箱
    },
    get pass () {
      return '' // 生成的授权码
    },
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    // 过期时间
    get expire () {
      return () => {
        return new Date().getTime() + 60 * 1000 // 1分钟
      }
    }
  }
}
