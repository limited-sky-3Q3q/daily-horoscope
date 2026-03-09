/**
 * 今日运势生成器
 * 根据日期生成随机运势内容
 */

const FORTUNE_CATEGORIES = {
  overall: ['大吉', '吉', '中吉', '小吉', '平', '末小吉'],
  lucky: ['贵人', '贵人相助', '事事顺心', '时来运转', '机遇不断', '一帆风顺'],
  caution: ['注意休息', '谨言慎行', '避免冲动', '保持冷静', '劳逸结合', '低调行事'],
  advice: ['适合学习新技能', '适合处理重要事务', '适合社交活动', '适合规划未来', '适合休息放松', '适合做决定'],
  lucky_items: ['红色', '蓝色', '白色', '黄色', '紫色', '绿色'],
  lucky_numbers: ['3', '7', '9', '1', '5', '8']
};

/**
 * 生成随机运势
 * @param {Date} date - 日期
 * @returns {Object} 运势对象
 */
function generateHoroscope(date = new Date()) {
  // 使用日期作为种子，确保同一天的运势相同
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();

  const random = (i) => {
    const x = Math.sin(seed + i) * 10000;
    return x - Math.floor(x);
  };

  const pickRandom = (arr, index) => arr[Math.floor(random(index) * arr.length)];

  return {
    date: date.toLocaleDateString('zh-CN'),
    overall: pickRandom(FORTUNE_CATEGORIES.overall, 1),
    lucky: pickRandom(FORTUNE_CATEGORIES.lucky, 2),
    caution: pickRandom(FORTUNE_CATEGORIES.caution, 3),
    advice: pickRandom(FORTUNE_CATEGORIES.advice, 4),
    luckyItem: pickRandom(FORTUNE_CATEGORIES.lucky_items, 5),
    luckyNumber: pickRandom(FORTUNE_CATEGORIES.lucky_numbers, 6)
  };
}

/**
 * 格式化运势消息
 * @param {Object} horoscope - 运势对象
 * @returns {string} 格式化的运势消息
 */
function formatHoroscopeMessage(horoscope) {
  return `
══════════════════════════════
       🌟 今日运势 🌟
══════════════════════════════
📅 日期: ${horoscope.date}
🎯 综合运势: ${horoscope.overall}
🍀 吉祥: ${horoscope.lucky}
⚠️ 提醒: ${horoscope.caution}
💡 建议: ${horoscope.advice}
🎨 幸运色: ${horoscope.luckyItem}
🔢 幸运数字: ${horoscope.luckyNumber}
══════════════════════════════
  `.trim();
}

export { generateHoroscope, formatHoroscopeMessage };
