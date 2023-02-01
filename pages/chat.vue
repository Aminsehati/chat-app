<template>
  <div class="main flex-1 flex flex-col">
    <div class="hidden lg:block heading flex-2">
      <h1 class="text-3xl text-gray-700 mb-4">Chat</h1>
    </div>

    <div class="flex-1 flex h-full">
      <Sidebar :items="listUsers"/>
      <div class="chat-area flex-1 flex flex-col">
        <router-view :users="listUsers" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import users from '@/data'
import { Chat } from '~/types/user.types'
@Component({})
export default class HomePage extends Vue {
  listUsers: Chat[] = []
  mounted() {
    const users_storage = localStorage && localStorage['users']
    if (!users_storage) {
      localStorage.setItem('users', JSON.stringify(users))
      this.listUsers = users
    } else {
      this.listUsers = JSON.parse(users_storage)
    }
  }
}
</script>
