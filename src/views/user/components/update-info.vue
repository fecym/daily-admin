<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-14 22:27:33
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-11 21:45:22
 -->
<template>
  <article class="user public-page">
    <h3>更改用户信息</h3>
    <el-form
      ref="ruleForm"
      :model="info"
      :rules="rules"
      label-width="90px"
      class="demo-ruleForm"
    >
      <el-form-item label="登录名称">
        <el-input
          v-model="info.username"
          class="w300"
          readonly
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
import { updateInfo } from '@/api/users'
@Component
export default class UInfo extends Vue {
  // ts，extends写法
  data() {
    return {
      info: {
        username: '',
        realname: '',
        nickname: '',
        password: '',
        confirmPass: '',
        email: '',
        sex: 0,
        phoneNum: '',
        headPic: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入您的登录名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '登录名长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        realname: [
          { required: true, message: '请输入您的真实姓名', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入您的昵称', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '昵称要求长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        phoneNum: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          {
            pattern: /^1[3|4|5|6|7|8][0-9]\d{4,8}$/,
            message: '请输入正确的手机号'
          }
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          {
            pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
            message: '请输入正确的邮箱地址'
          }
        ],
        sex: [{ required: true, message: '请选择您的性别', trigger: 'change' }]
      }
    }
  }

  private password = '';

  private created() {
    // @ts-ignore
    this.info = UserModule.userInfo
  }

  private save(formName: string) {
    // @ts-ignore
    this.$refs[formName].validate(valid => {
      if (valid) {
        // @ts-ignore
        updateInfo(this.info)
          .then((res: any) => {
            if (res) {
              this.$message.success('修改成功')
              // 更新信息
              UserModule.SET_USERINFO(res)
              sessionStorage.setItem('userInfo', JSON.stringify(res))
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
.user {
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
