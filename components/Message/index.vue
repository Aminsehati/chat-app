<template>
  <div
    :class="[
      'message mb-4 flex',
      {
        'text-right flex-row-reverse': message_info.is_me,
      },
    ]"
  >
    <div class="flex-2">
      <div class="w-12 h-12 relative">
        <img
          class="w-12 h-12 rounded-full mx-auto object-cover"
          :src="message_info.user.avatar"
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
        ></span>
      </div>
    </div>
    <div class="flex-1 px-2">
      <div
        :class="[
          'inline-block  rounded-full p-2 px-6 ',
          message_info.is_me
            ? 'bg-blue-600 text-white'
            : 'bg-gray-300 text-gray-700',
        ]"
      >
        <span>
          {{ message_info.text }}
        </span>
      </div>
      <div class="pl-4">
        <small class="text-gray-500">
          {{ $utils.convertDateToMiladi(message_info.date_time) }}
        </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Message } from '@/types/user.types'
@Component({})
export default class MessageComponent extends Vue {
  @Prop() message_info!: Message
}
</script>