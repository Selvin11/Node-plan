// 实例化用户模型
var User = require('../lib/mongo').User;

module.exports = {
  // 注册用户
  create: function create(user){
    return User.create(user).exec();
  }
}
