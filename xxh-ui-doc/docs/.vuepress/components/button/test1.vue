<template>
  <div>
    <span>测试</span>
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
  </div>
</template>

<script>
// import xhButton from '../../../../../xxh-ui/src/packages/button'
export default {
  comments: {
    // xhButton
  }
}
</script>