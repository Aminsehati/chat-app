<template>
  <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
    <div class="search flex-2 pb-6 px-2">
      <input
        type="text"
        class="
          outline-none
          py-2
          block
          w-full
          bg-transparent
          border-b-2 border-gray-200
        "
        placeholder="Search"
      />
    </div>
    <div class="flex-1 h-full overflow-auto px-2">
      <div
        v-for="(user, index) in items"
        :key="index"
        class="
          entry
          cursor-pointer
          transform
          hover:scale-105
          duration-300
          transition-transform
          bg-white
          mb-4
          rounded
          p-4
          flex
          shadow-md
        "
      >
        <nuxt-link :to="`/chat/${user.id}`" class="flex items-center w-full">
          <div class="flex-2">
            <div class="w-12 h-12 relative">
              <img
                class="w-12 h-12 rounded-full mx-auto object-cover"
                :src="user && user.user && user.user.avatar"
                alt="chat-user"
              />
              <span
                class="
                  absolute
                  w-4
                  h-4
                  bg-green-400
                  rounded-full
                  right-0
                  bottom-0
                  border-2 border-white
                "
              ></span>
            </div>
          </div>
          <div class="flex-1 px-2">
            <div class="truncate w-32">
              <span class="text-gray-800">
                {{ user?.user?.first_name }}
                {{ user?.user?.last_name }}
              </span>
            </div>
          </div>
          <div class="flex-2 text-right">
            <div>
              <small class="text-gray-500">
                {{
                  user?.messages &&
                  user?.messages?.length &&
                  $utils.convertDateToMiladi(
                    user?.messages[user.messages.length - 1].date_time
                  )
                }}
              </small>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Chat } from '@/types/user.types'
@Component({})
export default class SidebarComponent extends Vue {
  @Prop({}) items!: Chat[]
}
</script>