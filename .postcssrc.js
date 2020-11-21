module.exports = {
  plugins: {
    autoprefixer: {
      // 建议在跟路径配置.browserslistrc 或在package.json配置browserslist 
      overrideBrowserslist: [
        "defaults",
        "not ie < 8",
        "iOS >= 8",
        "android >= 4.4",
        "chrome > 30",
        "firefox > 30",
        "last 2 versions",
        "> 5%",
      ]
    },
    precss: {},
    'postcss-pxtorem': {
      //rootValue 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      rootValue: 16,
      // 转换成rem后保留的小数点位数
      unitPrecision: 5,
      // 用来存放转换单位的属性的列表
      // [*] 表示全部
      // ['*position*'] 会匹配 background-position-y
      // Use ! to not match a property. Example: ['*', '!letter-spacing']
      // ['*', '!font*'] 不匹配font开头的属性
      propList: ['*'],
      // 对匹配到的选择器进行筛选
      // 如果只有字符串，例如['body'] 会匹配 .body-class
      // [/^body$/] will match body but not .body，只能匹配到body标签
      selectorBlackList: [],
      // Replaces rules containing rems instead of adding fallbacks
      // 是否直接更换属性值，而不添加备用属性
      replace: true,
      // 媒体查询里的单位是否需要转换单位
      mediaQuery: true,
      // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      minPixelValue: 2,
      // 转换时排除掉这些匹配到的文件
      exclude: /node_modules/i
    },
    // 'postcss-nano':{}
  }
}