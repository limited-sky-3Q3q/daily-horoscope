/**
 * 定时任务调度器
 */

import cron from 'node-cron';

/**
 * 启动定时任务
 * @param {Function} task - 要执行的任务函数
 * @param {string} cronExpression - cron表达式，默认每天7:40
 */
function startSchedule(task, cronExpression = '40 7 * * *') {
  console.log(`⏰ 定时任务已启动: ${cronExpression}`);
  console.log('📅 运势将在每天 7:40 发送\n');

  // 立即执行一次任务（可选）
  // task();

  cron.schedule(cronExpression, () => {
    console.log('\n🔔 定时任务触发:', new Date().toLocaleString('zh-CN'));
    task();
  });
}

/**
 * 启动测试模式 - 每分钟执行一次
 * @param {Function} task - 要执行的任务函数
 */
function startTestSchedule(task) {
  console.log('⏰ 测试模式已启动: 每分钟执行一次\n');
  startSchedule(task, '* * * * *');
}

export { startSchedule, startTestSchedule };
