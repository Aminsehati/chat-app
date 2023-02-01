<template>
  <div>
    <input
      :placeholder="placeholder"
      :class="[
        'w-full block ',
        {
          'border border-solid border-gray-300 py-2 px-2': has_border,
          'outline-none py-4 px-4 bg-transparent': !has_border,
        },
      ]"
      v-model="title"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from 'nuxt-property-decorator'
@Component({})
export default class TextFieldComponent extends Vue {
  @Prop({ type: String, default: '' }) placeholder!: string
  @Prop({ type: Boolean, default: false }) has_border!: boolean
  @VModel()
  title!: string
}
</script>