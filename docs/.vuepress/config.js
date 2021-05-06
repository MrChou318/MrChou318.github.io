const path = require('path')
module.exports = {
  palette: path.resolve(__dirname, 'styles/palette.styl'),
  title: "冬烘先生",  //这里是博客标题
  description: '愿时光能缓，愿故人不散！',  //博客描述
  // dest: 'public',  //博客部署时输出的文件夹
  base: '/',
  head: [
    ['link', {rel: 'icon', href: '/img/hero.jpg'}],  //favicon图标设置
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
  ],
  theme: 'reco',  // vuepress挂载的主题
  themeConfig: {
    //导航栏
    nav: [
      {text: '主页', link: '/', icon: 'reco-home'},
      {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
      // {
      //   text: '工具推荐',
      //   icon: 'reco-message',
      //   items: [
      //     {text: 'codeSandbox', link: 'https://codesandbox.io', icon: 'reco-coding'},
      //     {text: '正则表达式手册', link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html', icon: 'reco-coding'}
      //   ]
      // },
    ],
    //侧边栏设置
    sidebar: 'auto',
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    //博客自定义LOGO
    logo: '/img/hero.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '冬烘先生',
    // 作者头像
    authorAvatar: '/img/hero.jpg',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    //私有仓库key和密码
    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     *评论
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        // theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        theme: [ 'koharu'],
        clean: true,
        width: 150,
        modelStyle: {
          left: '30px',
          bottom: '40px'
        }
      }
    ],
    [
        // npm install @vuepress-reco/vuepress-plugin-bgm-player
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '写给黄淮',
            artist: '邵帅',
            url: '/music/邵帅 - 写给黄淮.mp3',
            cover: '/img/hero.jpg'
          }
        ],
        autoShrink: true,
        shrinkMode: 'mini',
        position: {
          top: '40vh'
        }
      }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    ["vuepress-plugin-nuggets-styles-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-styles-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    // [
    //   //先安装在配置， npm install vuepress-plugin-meting --save
    //   'meting', {
    //     metingApi: "https://api.i-meto.com/meting/api",
    //     meting: {
    //       server: "netease",
    //       type: "playlist",
    //       mid: "621465725"
    //     },          // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //       lrcType: 3
    //     }
    //   }
    // ],
    // [
    //   "music-bar",
    //   {
    //     playList: ['index.mp3']
    //   }
    // ]
  ]


  // theme: 'reco',
  // themeConfig: {
  //   avatar: '/img/hero.jpg',  // 头像
  //   logo: '/img/hero.jpg',      // Logo
  //   subSidebar: 'auto',  // 侧边栏
  //   blogConfig: {
  //     category: {
  //       location: 2,  // 在导航栏菜单中所占的位置，默认2
  //       text: 'Category', // 默认文案“分类”
  //     },
  //     tag: {
  //       location: 3,  // 在导航栏菜单中所占的位置，默认3
  //       text: 'Tag',  // 默认文案“标签”
  //     },
  //     socialLinks: [
  //       {
  //         icon: 'reco-github',
  //         link: 'https://github.con/recoluan'
  //       },
  //       {
  //         icon: 'reco-npm',
  //         link: 'https://www.npmjs.com/~reco-luan'
  //       }
  //     ]
  //   },
  //   nav: [
  //     { text: 'TimeLine', link: '/aaa/', icon: 'reco-date' },
  //     { text: '仓库', link: '/store/aaa' }
  //   ],
  //   author: 'zhanhao',
  //   music: '/music/index.mp3'
  // }
}
