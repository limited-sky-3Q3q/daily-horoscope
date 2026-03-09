# 🚀 GitHub Actions 快速部署指南

## 📋 部署前准备

确保你已拥有：
- ✅ GitHub账号
- ✅ Git已安装
- ✅ 当前项目的完整代码

## ⚡ 三分钟完成部署

### 步骤1：创建GitHub仓库（1分钟）

1. 访问 https://github.com/new
2. 仓库名：`daily-horoscope`
3. 公开或私有都可以
4. 点击 **Create repository**

### 步骤2：推送代码（2分钟）

```bash
# 在项目目录执行
git init
git add .
git commit -m "初始提交"

# 替换 YOUR_USERNAME 为你的GitHub用户名
git remote add origin https://github.com/YOUR_USERNAME/daily-horoscope.git
git branch -M main
git push -u origin main
```

### 步骤3：配置密钥（30秒）

1. 访问仓库页面
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 填写：
   - Name: `SERVERCHAN_SENDKEY`
   - Secret: `SCT320252TGVSNgh8nCNH0OnWmFYAKYHPq`
5. 点击 **Add secret**

### 步骤4：测试运行（1分钟）

1. 访问仓库的 **Actions** 标签页
2. 点击 **"Daily Horoscope Push"**
3. 点击 **"Run workflow"**
4. 点击绿色的 **"Run workflow"** 按钮
5. 检查微信是否收到消息

## ✅ 完成！

现在GitHub Actions将：
- 🕐 每天北京时间7:40自动推送运势
- 💬 推送到你的微信
- 📊 可以在Actions页面查看运行历史

## 🔧 管理维护

### 查看运行记录
访问仓库 → Actions → 选择运行记录

### 手动触发测试
Actions → Run workflow → Run workflow

### 修改推送时间
编辑 `.github/workflows/daily-horoscope.yml` 中的cron表达式

### 暂停推送
编辑 `.github/workflows/daily-horoscope.yml`，注释掉schedule部分

## 📚 详细文档

查看 `GITHUB_ACTIONS_GUIDE.md` 获取完整的配置说明和常见问题解答。

## 🎉 优势

- 不需要一直运行程序
- 不受本地开关机影响
- 24小时在线服务
- 完全免费
- 稳定可靠
