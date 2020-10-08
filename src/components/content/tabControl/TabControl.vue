<template>
  <div class="tabControl">
    <div class="tabControl-item" v-for="(item,index) in title" :key="index" 
    @click="itemClick(index)"
    :class="{actived: currentIndex === index}">
      {{item}}
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick',index)
    }
  }
}
</script>
<style lang="less" scoped>
.tabControl{
  display: flex;
  padding: 5px 10px;
  .tabControl-item{
    padding-bottom: 8px ;
    margin: 0 30px;
    flex: 1;
    text-align: center;
  }
  .actived{
    color: var(--color-high-text);
    border-bottom: 1px solid var(--color-high-text);
  }
}
</style>