# 每日运势推送服务

每天早上7:40自动发送今日运势到你的手机！

## 功能特点

- ✨ 每天早上7:40自动推送今日运势
- 📱 **支持微信推送**（Server酱）
- 🍎 **支持iOS推送**（Bark，可选）
- 🚀 **支持GitHub Actions自动化部署**（24小时在线，无需本地运行）
- 🎯 综合运势、吉祥、提醒、建议、幸运色、幸运数字
- 📝 自动保存运势记录到日志文件
- 🎲 同一天的运势相同（基于日期生成）
- 🔄 支持多种推送方式

## 部署方式

### 🌟 方式一：GitHub Actions（推荐）

**优势**：24小时在线，无需本地运行，完全免费

快速部署请查看：[DEPLOY.md](DEPLOY.md)

详细配置请查看：[GITHUB_ACTIONS_GUIDE.md](GITHUB_ACTIONS_GUIDE.md)

**三步完成**：
1. 创建GitHub仓库并推送代码
2. 配置Secrets（SendKey）
3. 点击Actions运行测试

### 💻 方式二：本地运行

适合临时使用或测试

## 快速开始（本地运行）

### 1. 安装依赖

```bash
npm install
```

### 2. 配置推送方式（二选一或都配置）

#### 方式一：微信推送（推荐）

获取Server酱的SendKey（只需1分钟）：

1. 访问 https://sct.ftqq.com/
2. 使用微信扫码登录
3. 在"Key&API"页面获取你的SendKey
4. 编辑 `.env` 文件，将SendKey填入：

```env
SERVERCHAN_SENDKEY=你的SendKey
```

#### 方式二：iOS推送（可选，仅iPhone/iPad）

1. 在App Store搜索并安装"Bark"应用
2. 打开Bark应用，复制你的推送Key
3. 编辑 `.env` 文件，填入Bark Key：

```env
BARK_KEY=你的BarkKey
```

### 3. 测试运势

立即生成并推送今日运势：

```bash
npm test
```

### 4. 启动定时服务（本地）

启动后每天7:40自动推送运势：

```bash
npm start
```

停止服务：按 `Ctrl+C`

**注意**：本地运行需要一直保持程序运行

## 项目结构

```
Claw/
├── index.js          # 主入口 - 定时任务调度
├── horoscope.js      # 运势生成器
├── notify.js         # 消息推送服务
├── scheduler.js      # 定时任务调度器
├── test.js           # 测试脚本
├── .env              # 配置文件
├── package.json      # 项目配置
├── README.md         # 说明文档
└── logs/             # 运势日志目录（自动生成）
```

## 运势内容

每条运势包含：

- 📅 日期
- 🎯 综合运势（大吉/吉/中吉/小吉/平/末小吉）
- 🍀 吉祥运势
- ⚠️ 今日提醒
- 💡 今日建议
- 🎨 幸运颜色
- 🔢 幸运数字

## 推送方式对比

| 方式 | 平台 | 优点 | 缺点 |
|------|------|------|------|
| Server酱 | 微信 | 所有手机通用、免费、有历史记录 | 需要关注公众号 |
| Bark | iOS | 原生推送、隐私安全、完全免费 | 仅限iOS设备 |

## 自定义配置

### 修改推送时间

编辑 `index.js` 中的 cron 表达式：

```javascript
// 每天7:40
startSchedule(mainTask, '40 7 * * *');

// 每天8:30
startSchedule(mainTask, '30 8 * * *');

// 其他格式参考: https://crontab.guru/
```

### 推送方式配置

在 `index.js` 或 `test.js` 中修改推送方式：

```javascript
// 仅微信推送
await sendMessage(message, ['wechat']);

// 仅iOS推送
await sendMessage(message, ['bark']);

// 同时推送到微信和iOS
await sendMessage(message, ['wechat', 'bark']);

// 所有渠道
await sendMessage(message, ['console', 'log', 'wechat', 'bark']);
```

## 微信推送说明（Server酱）

**特点：**
- ✅ 免费使用，无需企业微信账号
- ✅ 一分钟配置完成
- ✅ 支持文本和Markdown格式
- ✅ 消息实时推送
- ✅ 可以在公众号内查看历史消息

**获取SendKey步骤：**
1. 访问 https://sct.ftqq.com/
2. 微信扫码登录
3. 选择消息通道（默认即可）
4. 点击"Key&API"获取SendKey
5. 将SendKey填入 `.env` 文件

## iOS推送说明（Bark）

**特点：**
- ✅ 完全开源免费
- ✅ 基于苹果官方APNs推送
- ✅ 隐私安全，可自建服务器
- ✅ 支持自定义铃声和图标
- ✅ 不耗电，不需要常驻后台

**获取Bark Key步骤：**
1. App Store搜索"Bark"并安装
2. 打开应用，自动生成推送Key
3. 复制Key并填入 `.env` 文件的 `BARK_KEY`

## 常见问题

**Q: 网站打不开怎么办？**
A: Server酱地址是 https://sct.ftqq.com/ （不是 sctapi）

**Q: 可以同时使用微信和iOS推送吗？**
A: 可以，在 `.env` 中同时配置两个Key即可

**Q: 不想要推送了怎么办？**
A: 修改 `index.js` 或 `test.js` 中的推送方式，去掉 `'wechat'` 或 `'bark'`

## 运行环境

- Node.js 16+
- Windows/macOS/Linux

## 许可证

MIT


