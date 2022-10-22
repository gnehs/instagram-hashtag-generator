<template>
  <div class="tags">
    <div class="tag" v-for="tag of data" @click="toggleTag(tag.value)" :class="{selected: modelValue.includes(tag.value)}">
      <div class="icon">
        <span>{{tag.emoji}}</span>
      </div>
      {{tag.name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    radio: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    toggleTag(tag) {
      if (this.radio) {
        if (this.modelValue.includes(tag)) {
          this.$emit('update:modelValue', [])
        } else {
          this.$emit('update:modelValue', [tag])
        }
      } else {
        if (this.modelValue.includes(tag)) {
          this.$emit('update:modelValue', this.modelValue.filter((t) => t !== tag))
        } else {
          this.$emit('update:modelValue', [...this.modelValue, tag])
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.tags
  display: flex
  flex-wrap: wrap
  gap: 8px
  .tag
    display: flex
    align-items: center
    background: rgba(0, 0, 0, 0.05)
    border-radius: 5px
    padding: 5px 7.5px
    cursor: pointer
    user-select: none
    border: 1px solid transparent
    &:hover
      border: 1px solid #ccc
    &.selected
      background: rgba(120, 117, 157, 0.1)
      border: 1px solid #86639b
    .icon
      display: flex
      align-items: center
      justify-content: center
</style>