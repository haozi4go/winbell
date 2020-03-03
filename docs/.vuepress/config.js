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
    logo: '/images/winbell.png',
    repo: 'haozi4go',// 默认是 false, 设置为 true 来启用，右上角会出现 github 跳转链接
    lastUpdated: 'Last Updated', // 每个文档展示最近更新时间
    // editLinks: true, // 设置是否允许别人编辑文档页面
    nav: [ // 导航栏
      {text: '主页', link: '/'},
      {text: '发送消息', link: '/send/'}, // 根路径指docs目录，guide后面加一个 / 表示guide是一个目录，会自动读取其下的 CORE 2 文件展示到页面
    ],
    search: false,
    smoothScroll: true
  },
  plugins: {
    '@vuepress/back-to-top':{},
    '@vuepress/google-analytics':
      {
        'ga': 'UA-159325073-1' 
      },
    '@vuepress/medium-zoom':{},
    '@vuepress/nprogress':{},
    'vuepress-plugin-baidu-autopush':{},
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github',

      // all other options of Vssue are allowed
      owner: 'haozi4go',
      repo: 'winbell',
      clientId: '5e58db332ecf4be1dd7c',
      clientSecret: '954e4b27eaf9e0ca5cc6d231d3f235bc9c1683f3',
    }    
  }
}
