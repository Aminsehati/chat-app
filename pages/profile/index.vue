<template>
  <div>
    <div class="grid grid-cols-4 gap-x-2 gap-y-3">
      <div>
        <TexField
          has_border
          placeholder="First Name"
          v-model="userInfo.first_name"
        />
      </div>
      <div>
        <TexField
          has_border
          placeholder="lastName"
          v-model="userInfo.last_name"
        />
      </div>
    </div>
    <Button @onClick="updateUser" primary class="mt-6"> Update </Button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { User } from '~/types/user.types'
@Component({})
export default class ProfilePage extends Vue {
  userInfo: User = new User()
  async created() {
    this.getUserInfo()
  }
  async updateUser() {
    localStorage.setItem(
      'profile',
      JSON.stringify({
        ...this.userInfo,
      })
    )
    window.location.href = '/'
  }
  getUserInfo() {
    const profile_storage =
      process.client && localStorage && localStorage['profile']
    if (profile_storage) {
      this.userInfo = JSON.parse(profile_storage)
    }
  }
}
</script>