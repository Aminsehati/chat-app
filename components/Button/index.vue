<!-- eslint-disable no-dupe-keys -->
<template>
  <button :class="classesButton" :type="type" @click="$emit('onClick')">
    <slot v-if="!loading" />
  </button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'
import './style.scss'
@Component({})
export default class ButtonComponent extends Vue {
  @Prop({ type: Boolean, default: false }) primary!: boolean

  @Prop({ type: Boolean, default: false }) loading!: boolean
  @Prop({ type: String, default: 'button' }) type!: string
  public get classesButton() {
    return [
      'btn',
      {
        'bg-indigo-500 hover:bg-indigo-600 text-white': this.primary,
      },
    ]
  }
}
</script>