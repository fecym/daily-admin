export default function RouterReplaceSelf(component) {
  return {
    name: 'RouterReplaceSelf',
    computed: {
      showChild() {
        const deepestMatchedRoute = this.$route.matched[this.$route.matched.length - 1]
        return deepestMatchedRoute.instances.default !== this
      }
    },
    render(h) {
      return this.showChild ? h('router-view') : h(component)
    }
  }
}
