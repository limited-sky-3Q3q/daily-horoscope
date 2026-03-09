/**
 * 测试脚本 - 立即生成并显示今日运势
 */

import { generateHoroscope, formatHoroscopeMessage } from './horoscope.js';
import { sendMessage } from './notify.js';

console.log('🧪 测试模式: 立即生成今日运势\n');

// 生成今日运势
const horoscope = generateHoroscope(new Date());

// 格式化消息
const message = formatHoroscopeMessage(horoscope);

// 发送消息（包含微信推送）
await sendMessage(message, ['console', 'log', 'wechat']);

console.log('✅ 测试完成! 运行 `npm start` 启动定时服务');
