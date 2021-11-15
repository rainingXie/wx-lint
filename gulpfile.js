const gulp = require('gulp');
const process = require('child_process');

const lintCode = function(callback) {
  // 终端运行一个 "npm run lint" 的子进程
  process.exec('npm run lint', function(error, stdout) {
    console.log(stdout);
  });
  callback();
};

gulp.watch('pages/login/index.js', lintCode);

exports.default = function (callback) {
  callback();
};