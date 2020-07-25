<template>
  <el-card style="margin-bottom:20px;">
    <div
      slot="header"
      class="clearfix"
    >
      <span class="fl">关于我</span>
      <svg-icon
        name="edit"
        class="fr cursor-pointer"
        title="修改头像"
        @click="toggleShow"
      />
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb
          :image="avatar"
          :height="'100px'"
          :width="'100px'"
          :hoverable="false"
        >
          {{ user.nickname }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">
          {{ user.realname }}
        </div>
        <div class="user-role text-center text-muted">
          {{ user.email }}
        </div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon name="education" />
          <span>{{ $t('user.sign') }}</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.sign }}
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon name="skill" />
          <span>{{ $t('user.skills') }}</span>
        </div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>a 技能</span>
            <el-progress :percentage="51" />
          </div>
          <div class="progress-item">
            <span>b 技能</span>
            <el-progress :percentage="45" />
          </div>
          <div class="progress-item">
            <span>c 技能</span>
            <el-progress :percentage="4" />
          </div>
          <div class="progress-item">
            <span>d 技能</span>
            <el-progress
              :percentage="100"
              status="success"
            />
          </div>
        </div>
      </div>
    </div>
    <avatar-upload
      v-model="showImageUpload"
      field="files"
      :width="300"
      :height="300"
      @close="onClose"
      @src-file-set="srcFileSet"
      @crop-upload-success="onCropUploadSuccess"
    />
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PanThumb from '@/components/PanThumb/index.vue'
import AvatarUpload from '@/components/AvatarUpload/index.vue'
import { updateAvatar } from '@/api/users'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'UserCard',
  components: {
    PanThumb,
    AvatarUpload
  }
})
export default class extends Vue {
  @Prop({ required: true }) private user!: IUserInfo
  @Prop({ required: true }) private avatar!: string

  private showImageUpload = false

  private toggleShow() {
    this.showImageUpload = !this.showImageUpload
  }

  private onClose() {
    this.showImageUpload = false
  }

  private async onCropUploadSuccess({ data }: any, field: string) {
    console.log('UInfo -> onCropUploadSuccess -> field', field)
    console.log('UInfo -> onCropUploadSuccess -> data', data)
    this.showImageUpload = false
    // this.image = jsonData.files[field]
    // 更新头像，更新用户信息
    const fileUrl = data.url
    console.log('extends -> onCropUploadSuccess -> fileUrl', fileUrl)
    // UserModule.SET_AVATAR(fileUrl)
    const userInfo: IUserInfo = { ...UserModule.userInfo }
    userInfo.headPic = fileUrl
    try {
      await updateAvatar(fileUrl)
      UserModule.SET_USERINFO(userInfo)
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      this.$message.success('头像更新成功')
    } catch (e) {
      console.log('extends -> onCropUploadSuccess -> e', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
