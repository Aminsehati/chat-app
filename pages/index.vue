<template></template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  middleware(ctx: Context) {
    return ctx.redirect('/chat')
  },
})
export default class HomePage extends Vue {}
</script>