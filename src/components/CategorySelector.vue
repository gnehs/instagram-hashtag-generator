<template>
  <transition-group name="flip-list" style="position: relative" tag="div">
    <template v-for="item of data" :key="item.question">
      <div class="block">
        <div class="block-title">{{item.question}} </div>
        <div class="tags">
          <div
            class="tag"
            v-for="tag of item.options"
            :key="tag.name"
            @click="toggleTag(tag)"
            :class="{selected: tag.value.some(x=>value.includes(x))}">
            <div class="icon" v-if="tag.emoji">
              <span>{{tag.emoji}}</span>
            </div>
            {{tag.name}}
          </div>
        </div>
      </div>
      <template v-for="tag of item.options.filter(x=>x.children)" :key="tag.name">
        <CategorySelector v-if="tag.value.some(x=>value.includes(x))" :data="tag.children" v-model="value" />
      </template>
    </template>
  </transition-group>
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
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    toggleTag(item) {
      item = structuredClone(item)
      if (this.value.includes(item.value[0])) {
        let res = this.value
        res = res.filter(x => !item.value.flat(2).includes(x))
        // clear children
        if (item.children) {
          function removeChildren(options) {
            res = res.filter(x => !options.map(x => x.value).flat(2).includes(x))
            options.map(x => {
              if (x.children) {
                x.children.map(y => {
                  removeChildren(y.options)
                })
              }
            })
          }
          item.children.map(x => removeChildren(x.options))
        }
        this.value = res
      } else {
        this.value = [...this.value, ...item.value]
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