import comp from "F:/学习/vuepress/docs/.vuepress/.temp/pages/coding/css.html.vue"
const data = JSON.parse("{\"path\":\"/coding/css.html\",\"title\":\"CSS编码规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CSS编码规范\",\"categories\":[\"编码规范\"],\"tags\":[\"编码规范\"],\"author\":{\"name\":\"echo\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"1. CSS\",\"slug\":\"_1-css\",\"link\":\"#_1-css\",\"children\":[{\"level\":3,\"title\":\"1.1. 编码风格\",\"slug\":\"_1-1-编码风格\",\"link\":\"#_1-1-编码风格\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"coding/css.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
