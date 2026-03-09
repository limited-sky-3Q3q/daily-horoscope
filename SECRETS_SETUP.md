# 🔐 配置GitHub Secrets - 最后一步！

## ✅ 已完成

代码已成功推送到GitHub！
仓库地址：https://github.com/limited-sky-3Q3q/daily-horoscope

## 📋 现在需要配置GitHub Secrets

### 步骤1：访问仓库设置

1. 打开浏览器，访问：
   ```
   https://github.com/limited-sky-3Q3q/daily-horoscope/settings/secrets/actions
   ```

   或者：
   - 访问 https://github.com/limited-sky-3Q3q/daily-horoscope
   - 点击顶部的 **Settings** (设置)
   - 左侧菜单点击 **Secrets and variables** → **Actions**

### 步骤2：添加新的Secret

1. 点击 **"New repository secret"** 按钮

2. 填写信息：

   **Name (名称)**:
   ```
   SERVERCHAN_SENDKEY
   ```
   (注意：必须完全大写，完全匹配)

   **Secret (密钥值)**:
   ```
   SCT320252TGVSNgh8nCNH0OnWmFYAKYHPq
   ```
   (您的Server酱SendKey)

3. 点击 **"Add secret"** 保存

### 步骤3：验证配置

添加成功后，应该在列表中看到：
- `SERVERCHAN_SENDKEY` (刚刚添加的)

## 🧪 配置完成后：测试运行

### 方法1：通过Web界面测试

1. 访问仓库的Actions页面：
   ```
   https://github.com/limited-sky-3Q3q/daily-horoscope/actions
   ```

2. 点击左侧工作流名称 **"Daily Horoscope Push"**

3. 点击右侧 **"Run workflow"**

4. 点击绿色的 **"Run workflow"** 按钮

5. 等待约30-60秒，检查：
   - Actions页面显示绿色的✅标记
   - 微信收到运势消息

### 方法2：通过命令行触发（可选）

如果您安装了GitHub CLI：
```bash
gh workflow run "Daily Horoscope Push"
```

## ✨ 完成后

配置成功后：
- 🕐 每天北京时间7:40自动推送运势
- 💬 推送到您的微信
- 📊 可以在Actions页面查看运行历史

## 🔍 查看推送历史

- GitHub Actions：https://github.com/limited-sky-3Q3q/daily-horoscope/actions
- Server酱推送历史：https://sct.ftqq.com/push/history

## ⚠️ 注意事项

1. SendKey保密：
   - Secrets不会在代码中暴露
   - 不要分享您的SendKey

2. 定时任务延迟：
   - GitHub Actions定时任务可能有1-5分钟延迟
   - 属于正常现象

3. 免费额度：
   - 私有仓库：2000分钟/月
   - 每次运行约30秒
   - 每月可运行约4000次（足够使用）

## 🆘 常见问题

### Q: Actions运行失败
A: 检查：
1. Secrets是否配置正确
2. 查看Actions日志了解详细错误
3. 确认代码已成功推送

### Q: 没有收到微信消息
A: 检查：
1. Server酱消息通道是否已设置
2. 访问 https://sct.ftqq.com/push/history 查看推送历史
3. 确认是否关注了Server酱服务号

### Q: 如何修改推送时间
A: 编辑 `.github/workflows/daily-horoscope.yml` 中的cron表达式

### Q: 如何暂停推送
A: 编辑workflow文件，注释掉schedule部分

## 📚 相关文档

- 详细配置：`GITHUB_ACTIONS_GUIDE.md`
- 快速部署：`DEPLOY.md`
- 使用说明：`README.md`
