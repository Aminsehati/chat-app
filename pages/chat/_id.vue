<template>
  <div>
    <div class="flex-3">
      <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">
        Chatting with
        <b>
          {{ userInfo && userInfo.user && userInfo.user.first_name }}
          {{ userInfo && userInfo.use && userInfo.user.last_name }}
        </b>
      </h2>
    </div>
    <div class="messages flex-1 overflow-auto">
      <template v-for="(message, index) in userInfo.messages">
        <Message :message_info="message" :key="index" />
      </template>
    </div>
    <div class="flex-2 pt-4 pb-10">
      <div class="write bg-white shadow flex rounded-lg">
        <div class="flex-1">
          <TexField placeholder="Type a message..." v-model="message" />
        </div>
        <div class="flex-2 w-32 p-2 flex content-center items-center">
          <div class="flex-1 text-center"></div>
          <div class="flex-1">
            <button
              class="bg-blue-400 w-10 h-10 rounded-full inline-block"
              @click="addMessage"
            >
              <span class="inline-block align-text-bottom">
                <IconCheck />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Chat } from '~/types/user.types'
@Component({})
export default class ChatPage extends Vue {
  message: string = ''
  @Prop() users!: Chat[]
  addMessage() {
    const { id } = this.$route.params
    const index = this.users.findIndex((user) => Number(user.id) === Number(id))
    this.users[index].messages.push({
      user: {
        first_name: 'Amin',
        last_name: 'Sehati',
        avatar:
          'http://cdn.skanetplus.ir/upload/admin/Image/user/1401-08-1517-1670931951649-375321619.jpeg',
      },
      is_me: true,
      text: this.message,
      date_time: String(Date.now()),
    })
    localStorage.setItem('users', JSON.stringify(this.users))
    this.message = ''
  }
  get userInfo() {
    const { id } = this.$route.params
    return this.users.find((item) => Number(item.id) === Number(id)) || {}
  }
}
</script>
