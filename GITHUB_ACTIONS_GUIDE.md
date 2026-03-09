# GitHub Actions 部署指南

## 方案说明

使用GitHub Actions实现24小时自动运势推送，无需本地保持程序运行。

## 优势

- ✅ 完全免费
- ✅ 24小时在线，不受本地开关机影响
- ✅ GitHub官方支持，稳定可靠
- ✅ 可以查看运行历史和日志
- ✅ 支持手动触发测试

## 部署步骤

### 第一步：创建GitHub仓库（如果还没有）

1. 访问 https://github.com/new
2. 创建新仓库，命名为 `daily-horoscope`
3. 选择公开或私有都可以
4. 不要初始化README（我们已有代码）

### 第二步：推送代码到GitHub

在项目目录下执行以下命令：

```bash
# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "初始提交：每日运势推送服务"

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/daily-horoscope.git

# 推送代码
git branch -M main
git push -u origin main
```

### 第三步：配置GitHub Secrets

1. 访问你的GitHub仓库
2. 点击仓库顶部的 **Settings** (设置)
3. 左侧菜单找到 **Secrets and variables** → **Actions**
4. 点击 **New repository secret** (新建仓库密钥)
5. 配置以下密钥：
   - **Name**: `SERVERCHAN_SENDKEY`
   - **Secret**: `SCT320252TGVSNgh8nCNH0OnWmFYAKYHPq`
6. 点击 **Add secret** 保存

### 第四步：验证配置

1. 访问仓库的 **Actions** 标签页
2. 点击左侧的 **"Daily Horoscope Push"**
3. 点击 **"Run workflow"** (运行工作流)
4. 点击绿色的 **"Run workflow"** 按钮
5. 等待运行完成，检查微信是否收到消息

### 第五步：完成配置

配置完成后，GitHub Actions 将：

- 每天北京时间 7:40 自动推送运势
- 你可以在Actions页面查看运行历史
- 可以随时手动触发测试

## 工作流配置说明

### 定时配置
```yaml
schedule:
  - cron: '40 23 * * *'
```
- `40 23 * * *` = UTC时间23:40 = 北京时间7:40
- 每天（周一到周日）都会触发

### 手动触发
在Actions页面点击 "Run workflow" 可以立即测试推送。

## 查看日志

1. 访问仓库的 **Actions** 标签页
2. 点击具体的运行记录
3. 点击工作流步骤可以查看详细日志

## 修改推送时间

如果需要修改推送时间，编辑 `.github/workflows/daily-horoscope.yml`：

```yaml
# 北京时间8:00 (UTC 0:00)
- cron: '0 0 * * *'

# 北京时间12:00 (UTC 4:00)
- cron: '0 4 * * *'

# 每天12:00和20:00推送两次
- cron: '0 4,12 * * *'
```

时间转换：北京时间 = UTC时间 + 8小时

## 注意事项

1. **首次运行可能延迟**：GitHub Actions的定时任务可能有几分钟的延迟
2. **时区问题**：GitHub Actions使用UTC时间，需要注意时区转换
3. **私有仓库**：私有仓库也有免费的Actions额度（2000分钟/月）
4. **SendKey安全**：SendKey存储在Secrets中，不会暴露在代码中

## 常见问题

### Q: 没有收到推送怎么办？
A: 
1. 检查Actions运行是否成功
2. 查看Actions日志确认SendKey是否正确配置
3. 检查Server酱推送历史：https://sct.ftqq.com/push/history

### Q: 如何修改运势内容？
A:
1. 本地修改 `horoscope.js` 文件
2. 提交并推送到GitHub
3. Actions会自动使用新代码

### Q: 如何暂停推送？
A:
在workflow文件开头添加注释即可：
```yaml
# on:
#   schedule:
#     - cron: '40 23 * * *'
```

### Q: 超出免费额度怎么办？
A:
- 免费额度：私有仓库2000分钟/月
- 每次运行约30秒，每月可运行约4000次
- 远超日常需求

## 进阶功能

### 添加多个推送时间
```yaml
schedule:
  - cron: '40 23 * * *'   # 北京时间7:40
  - cron: '0 4 * * *'     # 北京时间12:00
```

### 工作日推送
```yaml
schedule:
  - cron: '40 23 * * 1-5'  # 周一到周五
```

### 自定义通知内容
可以修改环境变量传递更多配置：
```yaml
env:
  SERVERCHAN_SENDKEY: ${{ secrets.SERVERCHAN_SENDKEY }}
  CUSTOM_MESSAGE: ${{ secrets.CUSTOM_MESSAGE }}
```

## 技术支持

- GitHub Actions文档：https://docs.github.com/en/actions
- Cron表达式生成器：https://crontab.guru/
