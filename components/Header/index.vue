<template>
  <div class="py-4 flex-2 flex flex-row">
    <div class="flex-1 text-right flex items-center">
      <span class="inline-block text-gray-700">
        Status:
        <span
          class="
            inline-block
            align-text-bottom
            w-4
            h-4
            bg-green-400
            rounded-full
            border-2 border-white
          "
        ></span>
        <b>
          {{ $nuxt.isOffline ? 'Offline' : 'Online' }}
        </b>
      </span>
      <div class="w-12 h-12 relative ml-4">
        <img
          class="w-12 h-12 rounded-full mx-auto object-cover"
          :src="ProfileInfo.avatar"
          alt="chat-user"
        />
        <span
          class="
            absolute
            w-4
            h-4
            bg-gray-400
            rounded-full
            right-0
            bottom-0
            border-2 border-white
          "
        >
        </span>
        <span> </span>
      </div>
      <nuxt-link class="text-sm font-medium ml-4 text-gray-800" to="/profile">
        {{ ProfileInfo.first_name }}
        {{ ProfileInfo.last_name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class HeaderComponent extends Vue {
  get ProfileInfo() {
    const profile_storage =
      process.client && localStorage && localStorage['profile']
    if (!profile_storage) {
      return {}
    }
    return JSON.parse(profile_storage)
  }
}
</script>