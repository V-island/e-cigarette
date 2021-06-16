import { WOW } from 'wowjs'

let WowMixin = {
  data: function () {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      const wow = new WOW({
      })
      wow.init()
    })
  }
}

export default WowMixin