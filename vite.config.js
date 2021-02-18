const path = require('path')
function resolve (dir) {
  console.log('path_resolve')
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
// const baseUrl = 'https://www.fastmock.site/mock/c9158f30b6bdc106c2cd2d07130e1676' // 设置代理路径

console.log('--------into vite.config.js')

module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // ?

  // 将构建好的文件输出到这里
  outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: '',

  // 用于多页配置，默认是 undefined
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.ts', /* 这个是根入口文件 */
      // 模板文件
      template: 'index.html',
      // 输出文件
      filename: 'index.html',
      // 页面title
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 简写格式
    // 模板文件默认是 `public/subpage.html`
    // 如果不存在，就是 `public/index.html`.
    // 输出文件默认是 `subpage.html`.
    subpage: 'src/main.ts' /* 注意这个是 */
  },

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`boolean | 'warning' | 'default' | 'error'
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: 'default',

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  runtimeCompiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。
  // 通过这个选项可以显式转译一个依赖。
  transpileDependencies: [/* string or regex */],

  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  // 调整内部的 webpack 配置。
  chainWebpack: config => {
    // 配置别名不起作用 TODO
    config.resolve.alias
      .set('@', resolve('src')) // src 路径

    Object.assign(config, {
      resolve: {
        extensions: ['.vue', '.ts', '.js', '.json'], // 可以省略后缀名
        alias: { // 别名,在require的时候，可以使用这些别名，来缩短路径的长度
          '@': path.resolve(__dirname, './src')
        }
      }
    })
  },

  alias: {
    '/@/': path.resolve(__dirname, './src')
  },

  configureWebpack: () => {

  },

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      postcss: {
        plugins: {
        }
      }
    },

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。默认不开启
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: true
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    host: '0.0.0.0', // 局域网和本地访问
    port: 3000,
    https: false,
    // proxy: { // string | Object
    //   '/api': {
    //     target: 'https://www.fastmock.site/mock/c9158f30b6bdc106c2cd2d07130e1676',
    //     changeOrigin: true,
    //     logLevel: 'debug'
    //   }
    // },
    proxy: 'https://www.fastmock.site/mock/c9158f30b6bdc106c2cd2d07130e1676',
    before: app => {
      console.log('before', app)
    },
    after: function (app, server, compiler) {
      console.log('after', app)
    }
  },

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
