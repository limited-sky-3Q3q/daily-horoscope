# 🔧 Git推送手动操作指南

## 当前状态

✅ 已完成：
- Git仓库初始化
- 代码提交
- 远程仓库地址已添加

⏳ 需要您手动执行：推送代码到GitHub

## 方法1：命令行推送（推荐）

在项目目录下执行：

```bash
git push -u origin main
```

### 如果提示输入用户名和密码：

**用户名**：`limited-sky-3Q3q`

**密码**：这不是您的GitHub登录密码！需要使用Personal Access Token

### 创建Personal Access Token：

1. 访问：https://github.com/settings/tokens
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 填写：
   - Note: `Daily Horoscope Push`
   - Expiration: `90 days` 或选择其他时间
   - 勾选权限：**repo** (勾选整个repo部分)
4. 点击 **"Generate token"**
5. ⚠️ **立即复制显示的token**（只显示一次！）
6. 返回命令行，粘贴这个token作为密码

## 方法2：使用GitHub Desktop（图形界面）

1. 下载并安装GitHub Desktop：https://desktop.github.com/
2. 登录您的GitHub账号
3. 打开GitHub Desktop，选择 **"Add an Existing Repository from your Hard Drive"**
4. 选择项目目录：`c:/Users/20602/WorkBuddy/Claw`
5. 点击 **"Publish repository"**
6. 选择发布到 `limited-sky-3Q3q/daily-horoscope`
7. 保持私有或公开都可以
8. 点击 **Publish**

## 方法3：使用Web界面上传

如果git推送一直失败，可以手动上传：

1. 访问仓库：https://github.com/limited-sky-3Q3q/daily-horoscope
2. 点击 **"uploading an existing file"**
3. 依次上传以下文件（从项目目录复制）：

### 必需文件：
```
.github/workflows/daily-horoscope.yml
horoscope.js
index.js
notify.js
scheduler.js
test.js
package.json
package-lock.json
README.md
.gitignore
```

### 可选文件：
```
.env.example
DEPLOY.md
GITHUB_ACTIONS_GUIDE.md
MANUAL_DEPLOY.md
```

4. 每个文件上传后填写commit信息
5. 全部上传后，添加GitHub Secrets（下一步）

## 常见问题

### Q: git push一直卡住
A: 可能是代理问题。尝试：
```bash
git config --global http.sslVerify false
git push -u origin main
```

### Q: 提示认证失败
A: 必须使用Personal Access Token，不能使用GitHub登录密码

### Q: 提示仓库已存在
A: 在GitHub上删除仓库，然后重新创建

## 推送成功后的下一步

推送成功后，访问：https://github.com/limited-sky-3Q3q/daily-horoscope

然后配置GitHub Secrets：
1. 点击 **Settings**
2. **Secrets and variables** → **Actions**
3. **New repository secret**
4. Name: `SERVERCHAN_SENDKEY`
5. Secret: `SCT320252TGVSNgh8nCNH0OnWmFYAKYHPq`
6. 点击 **Add secret**

配置完成后，在Actions页面测试运行！
