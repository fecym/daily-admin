<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">
        {{ $t('settings.title') }}
      </h3>

      <div class="drawer-item">
        <span>{{ $t('settings.theme') }}</span>
        <theme-picker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          @change="themeChange"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.showTagsView') }}</span>
        <el-switch
          v-model="showTagsView"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.showSidebarLogo') }}</span>
        <el-switch
          v-model="showSidebarLogo"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.fixedHeader') }}</span>
        <el-switch
          v-model="fixedHeader"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.sidebarTextTheme') }}</span>
        <el-switch
          v-model="sidebarTextTheme"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.guide') }}</span>
        <el-switch
          v-model="isGuide"
          class="drawer-switch"
          :active-value="1"
          :inactive-value="0"
          :disabled="isRequest"
          @change="onGuideChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SettingsModule } from '@/store/modules/settings'
import ThemePicker from '@/components/ThemePicker/index.vue'
import { switchGuide } from '@/api/users'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Settings',
  components: {
    ThemePicker
  }
})
export default class extends Vue {
  get fixedHeader() {
    return SettingsModule.fixedHeader
  }

  set fixedHeader(value) {
    SettingsModule.ChangeSetting({ key: 'fixedHeader', value })
  }

  get showTagsView() {
    return SettingsModule.showTagsView
  }

  set showTagsView(value) {
    SettingsModule.ChangeSetting({ key: 'showTagsView', value })
  }

  get showSidebarLogo() {
    return SettingsModule.showSidebarLogo
  }

  set showSidebarLogo(value) {
    SettingsModule.ChangeSetting({ key: 'showSidebarLogo', value })
  }

  get sidebarTextTheme() {
    return SettingsModule.sidebarTextTheme
  }

  set sidebarTextTheme(value) {
    SettingsModule.ChangeSetting({ key: 'sidebarTextTheme', value })
  }

  get userInfo() {
    console.log(UserModule.userInfo, 'UserModule.userInfo')

    return UserModule.userInfo
  }

  private themeChange(value: string) {
    SettingsModule.ChangeSetting({ key: 'theme', value })
  }

  private isGuide: number = this.userInfo.isGuide
  private isRequest = false
  private timer: any = null
  private onGuideChange(val: number) {
    clearTimeout(this.timer)
    try {
      this.timer = setTimeout(async() => {
        const data = {
          id: this.userInfo.id,
          flag: val
        }
        this.isRequest = true
        await switchGuide(data)
        this.isRequest = false
        const userInfo: IUserInfo = { ...this.userInfo, isGuide: val }
        UserModule.SET_USERINFO(userInfo)
      }, 500)
    } catch (error) {
      this.isRequest = false
      console.log('extends -> onGuideChange -> error', error)
    }
  }

  private beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
