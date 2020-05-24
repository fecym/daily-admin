<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col
          :span="6"
          :xs="24"
        >
          <user-card
            :user="user"
            :avatar="avatar"
          />
        </el-col>
        <el-col
          :span="18"
          :xs="24"
        >
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="基础信息">
                <BaseInfo />
              </el-tab-pane>
              <el-tab-pane label="更改基本信息">
                <UpdateInfo />
              </el-tab-pane>
              <el-tab-pane label="更改密码">
                <UpdatePassword />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import UserCard from './components/UserCard.vue'

import BaseInfo from '@/views/user/components/base-info.vue'
import UpdateInfo from '@/views/user/components/update-info.vue'
import UpdatePassword from '@/views/user/components/update-password.vue'

@Component({
  name: 'Profile',
  components: {
    BaseInfo,
    UpdateInfo,
    UpdatePassword,
    UserCard
  }
})
export default class extends Vue {
  // private user = defaultProfile
  private activeTab = '0'

  get name() {
    return UserModule.name
  }

  get email() {
    return UserModule.email
  }

  get avatar() {
    return UserModule.avatar
  }

  get roles() {
    return UserModule.roles
  }

  get user() {
    return UserModule.userInfo
  }

  created() {
    // this.getUser()
  }

  private getUser() {
    // this.user = {
    //   name: this.name,
    //   email: this.email,
    //   avatar: this.avatar,
    //   roles: this.roles.join(' | ')
    // }
  }
}
</script>
