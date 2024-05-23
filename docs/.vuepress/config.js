import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: 'https://www.linglan01.cn/favicon.JPG',
    navbar: [
      { text: '掘金', link: 'https://juejin.cn/user/501852195010775/posts' },
      { text: 'Github', link: 'https://github.com/fyszhizhuxia' }
    ],
    sidebar: [
      // '/', // 首页链接
      {
        title: '编码规范', // 分组标题
        collapsable: false, // 是否可折叠，设为false保持分组总是打开的
        children: [
          '/coding/html.md', // 子页面链接
          '/coding/css.md' // 子页面链接
        ]
      }
    ]
  }),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点'
})
