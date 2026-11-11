// 默认占位脚本。远程脚本使用同一路径缓存时，本文件会被覆盖。
(function () {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  const time = d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate())
    + ' ' + p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
  console.log('[签到重放测试] 脚本运行时间：' + time);
  console.log('Hello, Stash!');
  $notification.post('签到脚本重放测试', 'Hello, Stash!', '占位脚本运行成功。请在覆写参数中设置要测试的脚本。');
  $done({
    title: '签到脚本重放测试',
    content: 'Hello, Stash!\n占位脚本运行成功。请设置目标脚本后，点击本面板刷新重放。',
    icon: 'arrow.clockwise',
    backgroundColor: '#4169A1'
  });
})();
