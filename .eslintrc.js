module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    amd: true
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  extends: [
    "eslint:recommended"
  ],
  globals: {
    "App": true,
    "Page": true,
    "Component": true,
    "Behavior": true,
    "wx": true,
    "getApp": true,
    "getCurrentPages": true
  },
  rules: {
    "semi": [1, "always"], // 语句结束强制分号
    "no-global-assign": "error", //禁止修改全局变量
    "no-trailing-spaces": "error", //不允许在行尾使用尾随空格
    "no-multiple-empty-lines": "error", //不允许多个空行
    "no-else-return": "warn",//如果if语句里面有return,后面不能跟else语句
    "no-empty": "error", //块语句中的内容不能为空
    "no-inline-comments": "error",//禁止行内备注
    "no-var": "error",//禁用var，用let和const代替
    "camelcase": "error",//强制驼峰法命名
    "init-declarations": "error",//声明时必须赋初值
    "space-before-function-paren": "off",//函数定义时括号前面要不要有空格
    "use-isnan": "error", //要判断一个变量是否是 NaN 的时候，一定要用 isNaN 方法
    "comma-dangle": "warn", //行末逗号
    "no-useless-escape": "off", //不允许不必要的转义字符
    "prefer-promise-reject-errors": "off" //要求使用错误对象作为拒绝承诺的原因
  }
}