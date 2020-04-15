<template>
  <div id="app">
    <xh-button>
      默认按钮
    </xh-button>
    <!-- 带类型的按钮 -->
    <xh-button type='primary'>主要按钮</xh-button>
    <xh-button type='warning'>警告按钮</xh-button>
    <xh-button type='danger'>危险按钮</xh-button>
    <xh-button type='success'>成功按钮</xh-button>
    <xh-button type='info'>信息按钮</xh-button>

    <!-- 带icon的按钮 -->
    <xh-button
      type='info'
      icon="sousuo"
    >信息按钮</xh-button>
    <xh-button
      type='primary'
      icon="sousuo"
    ></xh-button>

    <!-- 图标位置在右侧的按钮 -->
    <xh-button
      type='info'
      icon="sousuo"
      icon-position="right"
    >信息按钮</xh-button>

    <xh-icon icon="sousuo"></xh-icon>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
