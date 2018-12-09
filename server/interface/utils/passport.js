import passport from 'koa-passport'
 // 策略
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

// 调local策略
passport.use(new LocalStrategy(async function (username, password, done) {
  let where = {
    username
  };
  let result = await UserModel.findOne(where)
  if (result != null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

// 每次请求的时候会从session中读取用户对象，查询用户验证登录成功后会把用户的数据存储到session中
// 用户每次进来的时候都通过session去验证，需要做序列化的动作
passport.serializeUser(function (user, done) {
  done(null, user)
})

// 反序列化
passport.deserializeUser(function (user, done) {
  return done(null, user)
})

export default passport
