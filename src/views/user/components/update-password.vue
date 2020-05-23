<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-14 22:29:03
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-11 21:43:24
 -->
<template>
  <article class="update-password public-page">
    <h3>更改密码</h3>
    <el-form
      ref="ruleForm"
      :model="info"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="登录名称">
        <el-input
          v-model="username"
          class="w300"
          readonly
        />
      </el-form-item>
      <el-form-item
        label="旧密码"
        prop="oldPassword"
      >
        <el-input
          v-model="info.oldPassword"
          class="w300"
          clearable
          type="password"
        />
      </el-form-item>
      <el-form-item
        label="新密码"
        prop="newPassword"
      >
        <el-input
          v-model="info.newPassword"
          class="w300"
          clearable
          type="password"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="confirmPass"
      >
        <el-input
          v-model="info.confirmPass"
          class="w300"
          clearable
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="save('ruleForm')"
        >
          确认修改
        </el-button>
      </el-form-item>
    </el-form>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { updatePassword } from '@/api/users'
import { Base64 } from 'js-base64'
interface IInfo {
  oldPassword: string
  newPassword: string
  confirmPass?: string
}
@Component
export default class UpdatePass extends Vue {
  data() {
    const validateOldPassword = (
      rule: any,
      value: string,
      callback: any
    ): void => {
      if (value === '') {
        callback(new Error('请输入新的密码'))
        // @ts-ignore
      } else if (value === this.info.oldPassword) {
        callback(new Error('新密码和老密码不可以一样!'))
      } else {
        callback()
      }
    }
    const validatePass = (rule: any, value: string, callback: any): void => {
      if (value === '') {
        callback(new Error('请确认新的密码'))
        // @ts-ignore
      } else if (value !== this.info.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      username: UserModule.userInfo.username,
      info: {
        oldPassword: '',
        newPassword: '',
        confirmPass: ''
      },
      rules: {
        oldPassword: [
          { required: true, message: '请输入旧的密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少6位', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, validator: validateOldPassword, trigger: 'blur' },
          { min: 6, message: '密码长度最少6位', trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  }

  public created() {
    console.log(UserModule, 'UserModule.userInfoUserModule.userInfoUserModule.userInfoUserModule.userInfo')
  }

  private save(formName: string) {
    // @ts-ignore
    this.$refs[formName].validate(valid => {
      if (valid) {
        const info: IInfo = {
          // @ts-ignore
          oldPassword: Base64.encode(this.info.oldPassword),
          // @ts-ignore
          newPassword: Base64.encode(this.info.newPassword)
        }
        console.log(info)
        // @ts-ignore
        updatePassword(info)
          .then((res: any) => {
            console.log(res)
            if (res.code === 200) {
              // 退出提示用户再次登录
              this.$confirm('密码更新成功，请重新登陆系统', '确定登出', {
                confirmButtonText: '重新登录',
                cancelButtonText: '退出系统',
                type: 'warning'
              })
                .then(() => {
                  // 清除一切信息，重新登录
                  UserModule.LogOut().then(() => {
                    location.reload() // To prevent bugs from vue-router
                  })
                })
                .catch(() => {
                  // 清除一切信息，重新登录
                  UserModule.LogOut().then(() => {
                    location.reload() // To prevent bugs from vue-router
                  })
                })
            } else {
              this.$message.warning(res.msg)
            }
          })
          .catch((err: any) => {
            console.log(err)
            this.$message.warning('修改失败')
          })
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.update-password {
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
