/**
 * 消息推送服务
 * 支持多种推送方式
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

/**
 * 日志推送 - 将消息记录到文件
 * @param {string} message - 消息内容
 */
async function logPush(message) {
  const logDir = join(process.cwd(), 'logs');
  if (!existsSync(logDir)) {
    mkdirSync(logDir, { recursive: true });
  }

  const logFile = join(logDir, `horoscope-${new Date().toISOString().split('T')[0]}.log`);
  const timestamp = new Date().toLocaleString('zh-CN');

  const logEntry = `[${timestamp}]\n${message}\n${'='.repeat(50)}\n\n`;

  try {
    writeFileSync(logFile, logEntry, { flag: 'a' });
    console.log('✅ 运势已记录到日志文件:', logFile);
  } catch (error) {
    console.error('❌ 日志记录失败:', error.message);
  }
}

/**
 * 控制台推送 - 在控制台显示消息
 * @param {string} message - 消息内容
 */
function consolePush(message) {
  console.log('\n' + message + '\n');
}

/**
 * Server酱微信推送
 * @param {string} title - 消息标题
 * @param {string} content - 消息内容
 */
async function serverChanPush(title, content) {
  // 读取配置文件
  let sendKey = process.env.SERVERCHAN_SENDKEY;

  if (!sendKey) {
    try {
      const envFile = join(process.cwd(), '.env');
      const envContent = readFileSync(envFile, 'utf-8');
      const match = envContent.match(/SERVERCHAN_SENDKEY=(.+)/);
      if (match) {
        sendKey = match[1].trim();
      }
    } catch (error) {
      // 配置文件不存在，忽略
    }
  }

  if (!sendKey || sendKey === 'YOUR_SENDKEY_HERE') {
    console.warn('⚠️ 未配置Server酱SendKey，跳过微信推送');
    console.warn('💡 获取SendKey步骤:');
    console.warn('   1. 访问 https://sct.ftqq.com/');
    console.warn('   2. 微信扫码登录');
    console.warn('   3. 点击 Key&API 获取SendKey');
    console.warn('   4. 填入 .env 文件的 SERVERCHAN_SENDKEY');
    return;
  }

  // 使用新的API地址
  const url = `https://sctapi.ftqq.com/${sendKey}.send`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        desp: content
      })
    });

    const result = await response.json();

    if (result.code === 0) {
      console.log('✅ 微信推送成功 (Server酱)');
    } else {
      console.error('❌ 微信推送失败:', result.message);
    }
  } catch (error) {
    console.error('❌ 微信推送异常:', error.message);
  }
}

/**
 * Bark推送 (iOS)
 * @param {string} title - 消息标题
 * @param {string} content - 消息内容
 */
async function barkPush(title, content) {
  let barkKey = process.env.BARK_KEY;

  if (!barkKey) {
    try {
      const envFile = join(process.cwd(), '.env');
      const envContent = readFileSync(envFile, 'utf-8');
      const match = envContent.match(/BARK_KEY=(.+)/);
      if (match) {
        barkKey = match[1].trim();
      }
    } catch (error) {
      // 配置文件不存在，忽略
    }
  }

  if (!barkKey || barkKey === 'YOUR_BARK_KEY_HERE') {
    console.warn('⚠️ 未配置Bark Key，跳过Bark推送');
    return;
  }

  // 使用公共Bark服务器
  const url = `https://api.day.app/${barkKey}/${encodeURIComponent(title)}/${encodeURIComponent(content)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.code === 200 || result.message === 'success') {
      console.log('✅ Bark推送成功 (iOS)');
    } else {
      console.error('❌ Bark推送失败:', result.message);
    }
  } catch (error) {
    console.error('❌ Bark推送异常:', error.message);
  }
}

/**
 * 发送运势消息
 * @param {string} message - 消息内容
 * @param {Array<string>} methods - 推送方法列表 ['console', 'log', 'wechat', 'bark']
 */
async function sendMessage(message, methods = ['console', 'log', 'wechat']) {
  console.log(`📤 开始推送运势消息...`);

  const pushers = {
    console: () => consolePush(message),
    log: () => logPush(message),
    wechat: () => serverChanPush('🌟 今日运势', message),
    bark: () => barkPush('🌟 今日运势', message)
  };

  for (const method of methods) {
    if (pushers[method]) {
      try {
        await pushers[method]();
      } catch (error) {
        console.error(`❌ ${method} 推送失败:`, error.message);
      }
    }
  }

  console.log('✨ 运势推送完成!\n');
}

export { sendMessage, logPush, consolePush, serverChanPush, barkPush };
