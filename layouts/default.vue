<template>
  <div class="w-full h-screen">
    <div class="flex h-full">
      <div class="flex-1 bg-gray-100 w-full h-full">
        <div class="main-body container m-auto w-11/12 h-full flex flex-col">
          <Header />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class LayoutDefault extends Vue {
  mounted() {
    this.setUser()
  }
  setUser() {
    const profile_storage = localStorage && localStorage['profile']
    if (!profile_storage) {
      const profile = {
        first_name: 'Amin',
        last_name: 'Sehati',
        avatar:
          'http://cdn.skanetplus.ir/upload/admin/Image/user/1401-08-1517-1670931951649-375321619.jpeg',
      }
      localStorage.setItem('profile', JSON.stringify(profile))
    }
  }
}
</script>