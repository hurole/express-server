# MongoDB 数据库

## 安装 MongoDB

> 这里通过 Docker 安装

### 拉取 MongoDB 镜像

```bash
docker pull mongo
```

### 运行容器

创建运行 MongoDB 数据库容器，指定容器名字为 mongodb

```bash
docker run -d --name mongodb -p 27017:27017 mongo
```

这样我们就可以通过 27017 端口访问。

### 设置用户

进入容器执行 mongo 命令，启动 MongoDB 的命令行。

```bash
docker exec -it mongodb mongo
```

创建管理员用户

```bash
#切换到admin数据库
use admin
#添加管理员用户
db.insert({user:'root',pwd:'qweasd',roles:[{role:'root',db:'admin'}]})
```

这里创建了一个用户名为`root`，密码为`qweasd`，角色为 root 超级管理员的用户。
创建数据库用户

```bash
# use切换数据库，不存在直接创建一个数据库
use vue3_admin
# 给vue3_admin添加用户，该用户只具有读写当前数据库的权限
db.insert({user:'vue',pwd:'123456',roles:['readWrite']})
```

这里创建了一个数据库，名字为 vue3_admin。并为该数据库创建了一个只具有读写权限的用户 vue。
此时便可以使用 vue 这个用户链接 vue3_admin 这个数据库。
