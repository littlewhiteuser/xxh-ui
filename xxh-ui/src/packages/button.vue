<template>
  <button
    class="xh-button"
    :class="btnClass"
  >
    <xh-icon
      :icon="icon"
      class="icon"
    ></xh-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'xh-button',
  props: {
    type: {
      type: String,
      default: '',
      validator (type) {
        if (type && !['primary', 'warning', 'danger', 'success', 'info'].includes(type)) {
          console.error('类型必须为：' + ['primary', 'warning', 'danger', 'success', 'info'].join('、'))
        }
        return true
      }
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnClass () {
      let classes = []
      if (this.type) {
        classes.push(`xh-button-${this.type}`)
      }
      if (this.iconPosition) {
        classes.push(`xh-button-${this.iconPosition}`)
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.xh-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        warning: $warning,
        danger: $danger,
        info: $info
      )
  {
    &-#{$type} {
      background-color: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        warning: $warning-hover,
        danger: $danger-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover {
      background-color: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        warning: $warning-active,
        danger: $danger-active,
        info: $info-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background-color: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon + span {
    margin-left: 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
    .icon + span {
      margin-left: 0;
      margin-right: 4px;
    }
  }
}
</style>