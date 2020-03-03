#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 安装依赖
yarn install

# 生成静态文件
yarn build

# 切到静态文件目录
cd docs/.vuepress/dist

# 静态文件全部提交
git init
git add -A

# 提交到历史区，$1 为运行 sh 时的第一个参数
git commit -am "deploy"

# 提交到 master 分支
git push -f https://${username}:${pass}@e.coding.net/haozi4go/winbell/winbell-website.git master

# 退出命令
exit 0