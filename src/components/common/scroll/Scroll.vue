<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick( ()=> {
      this.scroll = new BScroll(this.$refs.scroll,{
        click: true,
        probeType:3,
        pullUpLoad:true
      }) 
      this.scroll.on('scroll', position => {
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
      console.log('refresh');
    },
    scrollTo(x, y, time = 1000) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>
<style lang="less" scoped>

</style>