<!-- eslint-disable no-dupe-keys -->
<template>
  <button :class="classesButton" :type="type" @click="$emit('onClick')">
    <div v-if="loading" class="flex justify-center">
      <svg class="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
        <path
          d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
        />
      </svg>
    </div>
    <slot v-if="!loading" />
  </button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'
import './style.scss'
@Component({})
export default class ButtonComponent extends Vue {
  @Prop({ type: Boolean, default: false }) primary!: boolean
  @Prop({ type: Boolean, default: false }) secondary!: boolean
  @Prop({ type: Boolean, default: false }) lg!: boolean
  @Prop({ type: Boolean, default: false }) sm!: boolean
  @Prop({ type: Boolean, default: false }) xs!: boolean
  @Prop({ type: Boolean, default: false }) primary_outline!: boolean
  @Prop({ type: Boolean, default: false }) grey_outline!: boolean
  @Prop({ type: Boolean, default: false }) danger!: boolean
  @Prop({ type: Boolean, default: false }) danger_outline!: boolean
  @Prop({ type: Boolean, default: false }) success!: boolean
  @Prop({ type: Boolean, default: false }) success_outline!: boolean
  @Prop({ type: Boolean, default: false }) orange!: boolean
  @Prop({ type: Boolean, default: false }) tertiary!: boolean
  @Prop({ type: Boolean, default: false }) disabled!: boolean
  @Prop({ type: Boolean, default: false }) loading!: boolean
  @Prop({ type: String, default: 'button' }) type!: string
  public get classesButton() {
    return [
      'btn',
      {
        'bg-indigo-500 hover:bg-indigo-600 text-white': this.primary,
        'btn-lg': this.lg,
        'btn-sm': this.sm,
        'btn-xs': this.xs,
        '!border-gray-200 !hover:border-gray-300 text-indigo-500':
          this.primary_outline,
        'btn border-gray-200 hover:border-gray-300 text-gray-600':
          this.grey_outline,
        'btn  border-gray-200 hover:border-gray-300 text-red-500':
          this.danger_outline,
        'btn bg-red-500 hover:bg-red-600 text-white': this.danger,
        'btn bg-green-500 hover:bg-green-600 text-white': this.success,
        'btn border-gray-200 hover:border-gray-300 text-green-500':
          this.success_outline,
        'btn bg-orange-500 hover:bg-orange-600 text-white': this.orange,
        'border-gray-200 hover:border-gray-300 text-gray-600': this.tertiary,
        'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed shadow-none':
          this.disabled,
      },
    ]
  }
}
</script>