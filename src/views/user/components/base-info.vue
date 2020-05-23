<template>
  <article class="base-info public-page">
    <h3>基础信息</h3>
    <el-form
      ref="form"
      :model="userInfo"
      label-width="120px"
    >
      <el-form-item label="登陆账户：">
        <el-input
          v-model="userInfo.username"
          readonly
          class="w300"
        />
      </el-form-item>
      <el-form-item label="创建时间：">
        <el-input
          v-model="userInfo.createTime"
          readonly
          class="w300"
        />
      </el-form-item>
      <el-form-item label="真实姓名：">
        <el-input
          v-model="userInfo.realname"
          readonly
          class="w300"
        />
      </el-form-item>
      <el-form-item label="用户昵称：">
        <el-input
          v-model="userInfo.nickname"
          readonly
          class="w300"
        />
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input
          v-model="userInfo.email"
          readonly
          class="w300"
        />
      </el-form-item>
      <el-form-item label="手机号：">
        <el-input
          v-model="userInfo.phoneNum"
          readonly
          class="w300"
        />
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio-group v-model="userInfo.sex">
          <el-radio
            :label="0"
            border
            :disabled="userInfo.sex !== 0"
          >
            保密
          </el-radio>
          <el-radio
            :label="1"
            border
            :disabled="userInfo.sex !== 1"
          >
            男
          </el-radio>
          <el-radio
            :label="2"
            border
            :disabled="userInfo.sex !== 2"
          >
            女
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上次更新时间：">
        <el-input
          v-model="userInfo.updateTime"
          readonly
          class="w300"
        />
      </el-form-item>
    </el-form>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
@Component
export default class BaseInfo extends Vue {
  get userInfo() {
    console.log(UserModule.userInfo)
    return UserModule.userInfo
  }
}
</script>
<style lang="scss" scoped>
  .base-info {
    padding-top: 0;
    h3 {
      font-weight: normal;
      line-height: 3.5;
      border-bottom: 1px solid #efefef;
      margin: 0;
      margin-bottom: 20px;
      padding-left: 20px;
    }
  }
</style>
