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

// 发送消息
await sendMessage(message, ['console', 'log']);

console.log('✅ 测试完成! 运行 `npm start` 启动定时服务');
