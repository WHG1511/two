/**
 * 数据库
 * mongod --dbpath=D:\MongoDB\bin
 * 分类：
 * 非关系型数据库：
    * mongodb sqlserver sqllite
    * 关系：库=》集合(文档document)=》对象
    * 命令================================
        * show dbs  查看所有数据库 
        * use 数据库名称  使用数据库
        * show collections  查看选中数据库下面的集合
        * 增：=======
        * 插入单条数据：db.集合名.insert({""})
        * 插入多条数据：db.集合名.insert([{""},{""}])
        * 插入多条数据:db.集合名.insertMany([{},{}])
        * 插入单条数据：db.集合名.insertOne({})
        * 保存文档：db.集合名.save({})
        * 删：=======
        * 删除所有：db.集合名.remove({})
        * 删除单个数据：db.集合名.deleteOne()
        * 删除匹配所有数据：db.集合名.deleteMany()
        * 改:=======
        * 更新数据：db.集合名.update({},{$set:{}})
        * 更新一条数据：db.集合名.updateOne()
        * 更新多条数据：db.集合名.updateMany()
        * 查：=======
        * 查找所有：db.集合名.find()
        * 查找对应：db.集合名.find({})
        * 查找一条：db.集合名.findOne({})
        * 查找多条：db.集合名.findMany({})
        * =====
        * limit：截取   skip 跳过 sort 排序（1升序-1降序）  count 数据总条数
        * and并且 or或者 $gt大于 $gte大于等于 $it小于 $ite小于等于 $ne 不等于
        * 数据库==========
        * 查看当前使用的数据库：db
        * 创建数据库：use.数据库名  
        * 删除当前使用数据库：db.dropDatabase()
        * =============
        * 创建用户 权限  基于管理员权限
        * db.createUser({
        *   user:"admin",
        *   pwd:"123",
        *   roles:[{role:"readAnyDatabase",db:"test"}]
        * })
        * 权限：read 只有读 的权限  write  写入的权限
        * readAnyDatabase     仅读
        * userAdminAnyDatabase   管理用户所有的数据库
        * readWriteAnyDatabase   读写
        * 默认（超级）管理员 root
 * 
 * 关系型数据库：
 * mysql orancle=》DBA
 * 
 * mysql-u root-p
 * 
 * 
 * 
 * 
 */