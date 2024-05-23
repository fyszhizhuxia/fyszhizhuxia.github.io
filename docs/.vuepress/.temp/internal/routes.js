export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/学习/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/coding/css.html", { loader: () => import(/* webpackChunkName: "coding_css.html" */"F:/学习/vuepress/docs/.vuepress/.temp/pages/coding/css.html.js"), meta: {"title":"CSS编码规范"} }],
  ["/coding/html.html", { loader: () => import(/* webpackChunkName: "coding_html.html" */"F:/学习/vuepress/docs/.vuepress/.temp/pages/coding/html.html.js"), meta: {"title":"HTML编码规范"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/学习/vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
