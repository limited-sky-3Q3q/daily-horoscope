/**
 * 每日运势推送服务主入口
 * 每天7:40自动发送今日运势
 */

import { generateHoroscope, formatHoroscopeMessage } from './horoscope.js';
import { sendMessage } from './notify.js';
import { startSchedule } from './scheduler.js';

/**
 * 主任务函数 - 生成并发送运势
 */
async function mainTask() {
  try {
    // 生成今日运势
    const horoscope = generateHoroscope(new Date());

    // 格式化消息
    const message = formatHoroscopeMessage(horoscope);

    // 发送消息（支持多种推送方式）
    await sendMessage(message, ['console', 'log']);

  } catch (error) {
    console.error('❌ 运势推送失败:', error.message);
  }
}

// 启动定时任务
console.log('╔══════════════════════════════╗');
console.log('║   每日运势推送服务已启动    ║');
console.log('╚══════════════════════════════╝\n');

startSchedule(mainTask, '40 7 * * *');

console.log('💡 提示: 服务正在运行中，按 Ctrl+C 可停止服务');
