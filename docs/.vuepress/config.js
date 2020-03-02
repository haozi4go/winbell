module.exports = {
  title: '小窗铃 Winbell',
  description: '一款「程序员」和「服务器」之间的交流小程序',

  base : '/',
  cache: false,
  port: '80',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'haozi4go',// 默认是 false, 设置为 true 来启用，右上角会出现 github 跳转链接
    lastUpdated: 'Last Updated', // 每个文档展示最近更新时间
    // editLinks: true, // 设置是否允许别人编辑文档页面
    nav: [ // 导航栏
      {text: '主页', link: '/'},
      {text: '发送消息', link: '/send/'}, // 根路径指docs目录，guide后面加一个 / 表示guide是一个目录，会自动读取其下的 CORE 2 文件展示到页面
    ],
  },
  plugins: [
    '@vuepress/google-analytics',
      {
        'ga': 'UA-159325073-1'
      }
  ]
}
