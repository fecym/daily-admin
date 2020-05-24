<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-18 22:28:57
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-11 21:45:39
 -->
<template>
  <article class="dialog-account">
    <el-form
      ref="ruleForm"
      :model="info"
      label-width="90px"
      class="demo-ruleForm"
    >
      <el-form-item label="登录名称">
        <el-input
          v-model="info.username"
          class="w300"
          :readonly="info.id ? true : false"
        />
      </el-form-item>
      <el-form-item
        label="真实姓名"
        prop="realname"
      >
        <el-input
          v-model="info.realname"
          class="w300"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="用户昵称"
        prop="nickname"
      >
        <el-input
          v-model="info.nickname"
          class="w300"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input
          v-model="info.email"
          class="w300"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          v-model="info.password"
          type="password"
          class="w300"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="手机号"
        prop="phoneNum"
      >
        <el-input
          v-model="info.phoneNum"
          class="w300"
          clearable
          maxlength="11"
        />
      </el-form-item>
      <el-form-item
        label="用户头像"
        prop="headPic"
      >
        <el-input
          v-model="info.headPic"
          class="w300"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="性别"
        prop="sex"
      >
        <el-radio-group v-model="info.sex">
          <el-radio :label="0">
            保密
          </el-radio>
          <el-radio :label="1">
            男
          </el-radio>
          <el-radio :label="2">
            女
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个性签名：">
        <el-input
          v-model="info.sign"
          type="textarea"
          :autosize="{minRows: 2, maxRows: 4}"
          maxlength="100"
          show-word-limit
          class="w300"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="save"
        >
          确认修改
        </el-button>
        <el-button
          type="info"
          @click="close"
        >
          取消修改
        </el-button>
      </el-form-item>
    </el-form>
  </article>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { updateInfo, createAccounts } from '@/api/users'
import { Base64 } from 'js-base64'
@Component
export default class AccountDialog extends Vue {
  @Prop({ default: false }) private info!: IUserInfo;
  private modify() {
    const info = {
      ...this.info,
      // !是断言
      password: this.info.password && Base64.encode(this.info.password)
    }
    console.log(info)
    updateInfo(info)
      .then((res: any) => {
        if (res) this.$message.success('修改成功')
        this.$emit('close', true)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  private addAccounts() {
    const info = {
      ...this.info,
      // !是断言
      password: this.info.password && Base64.encode(this.info.password)
    }
    createAccounts(info)
      .then((res: any) => {
        if (res) this.$message.success('新增成功')
        this.$emit('close', true)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  private save() {
    if (this.info.id) {
      this.modify()
    } else {
      this.addAccounts()
    }
  }

  private close() {
    this.$emit('close')
  }
}
</script>
