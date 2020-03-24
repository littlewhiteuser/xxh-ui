<template>
  <button>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'xh-button'
}
</script>

<style scoped lang="scss">
</style>
