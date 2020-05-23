<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-06-02 18:36:15
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 17:17:13
 -->
<template>
  <article class="consume-details public-page">
    <el-form
      ref="ruleForm"
      :model="info"
      label-width="150px"
      class="demo-ruleForm"
    >
      <section class="two-columns">
        <el-form-item
          label="登录名称"
          class="left"
        >
          <el-input
            v-model="info.username"
            readonly
            class="w310"
          />
        </el-form-item>
        <el-form-item
          label="创建时间"
        >
          <div class="intro">
            <el-input
              v-model="info.createTime"
              readonly
            />
          </div>
        </el-form-item>
      </section>
      <!-- 餐饮 -->
      <section
        v-for="(columns, index) in detailsFormConfigList"
        :key="index"
        class="two-columns"
      >
        <el-form-item
          :label="columns.left.label"
          class="left"
          :prop="columns.left.prop"
          :rules="columns.left.rules"
        >
          <el-input
            v-model="info[columns.left.prop]"
            class="w310"
            clearable
          >
            <template slot="append">
              元
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
          :label="columns.right.detailsLabel"
        >
          <div
            v-for="(item, idx) in info[columns.right.prop]"
            :key="idx"
            class="intro"
          >
            <el-input
              v-model="info[columns.right.prop][idx]"
              class="w300"
            />
            <el-button
              v-if="idx === info[columns.right.prop].length - 1"
              type="primary"
              size="small"
              @click="addOnce(columns.right.type)"
            >
              增加
            </el-button>
            <el-button
              v-if="info[columns.right.prop].length > 1 && idx !== info[columns.right.prop].length - 1"
              type="danger"
              size="small"
              @click="delOnce(columns.right.type, idx)"
            >
              删除
            </el-button>
          </div>
        </el-form-item>
      </section>
      <el-form-item class="save">
        <el-button
          type="primary"
          @click="save('ruleForm')"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'
import { parseTime } from '@/utils'
import { UserModule } from '@/store/modules/user'
import { addConsumeRecord, updateConsumeInfo } from '@/api/consume'
import { deleteOnceDataMap, addOnceDataMap, detailsFormConfigList } from './components/details.page.config'
@Component
export default class ConsumeDetails extends Vue {
  private detailsFormConfigList = detailsFormConfigList
  private info: IConsumeInfo = {
    username: UserModule.userInfo.username,
    createTime: '',
    updateTime: '',
    // 餐饮
    repastPrice: '0',
    repastIntro: [''],
    // 出行工具
    vehiclePrice: '0',
    vehicleIntro: [''],
    // 零食
    snacksPrice: '0',
    snacksIntro: [''],
    // 转账
    transferAccounts: '0',
    transferIntro: [''],
    // 生活用品
    lifePrice: '0',
    lifeIntro: [''],
    // 化妆品
    cosmeticPrice: '0',
    cosmeticIntro: [''],
    // 旅游
    tripPrice: '0',
    tripIntro: [''],
    // 购物
    shoppingPrice: '0',
    shoppingIntro: [''],
    // 其他
    otherPrice: '0',
    otherIntro: ['']
  }

  private rules: object = {
    repastPrice: [
      { required: true, message: '请输入您的餐饮金额，不能小于1', trigger: 'blur' }
    ]
  }

  private created() {
    this.getInfo()
  }

  private getInfo() {
    if (this.$route.query.consumeId) {
      // @ts-ignore
      const info = JSON.parse(localStorage.getItem('consume-details'))
      info.vehicleIntro = JSON.parse(info.vehicleIntro)
      info.snacksIntro = JSON.parse(info.snacksIntro)
      info.transferIntro = JSON.parse(info.transferIntro)
      info.otherIntro = JSON.parse(info.otherIntro)
      info.cosmeticIntro = JSON.parse(info.cosmeticIntro)
      info.lifeIntro = JSON.parse(info.lifeIntro)
      info.tripIntro = JSON.parse(info.tripIntro)
      info.repastIntro = JSON.parse(info.repastIntro)
      info.shoppingIntro = JSON.parse(info.shoppingIntro)
      info.createTime = parseTime(info.createTime)
      this.info = info
      this.info.updateTime = parseTime(new Date()) as string
    } else {
      console.log('新增')
      this.info.createTime = parseTime(new Date()) as string
      this.info.updateTime = parseTime(new Date()) as string
    }
  }

  private addOnce(type: number) {
    addOnceDataMap(this.info)[type]()
  }

  private delOnce(type: number, idx: number) {
    deleteOnceDataMap(this.info, idx)[type]()
  }

  private dealInfo(data: IConsumeInfo) {
    const info = JSON.parse(JSON.stringify(data))
    info.vehicleIntro = JSON.stringify(info.vehicleIntro)
    info.snacksIntro = JSON.stringify(info.snacksIntro)
    info.transferIntro = JSON.stringify(info.transferIntro)
    info.otherIntro = JSON.stringify(info.otherIntro)
    info.cosmeticIntro = JSON.stringify(info.cosmeticIntro)
    info.lifeIntro = JSON.stringify(info.lifeIntro)
    info.tripIntro = JSON.stringify(info.tripIntro)
    info.repastIntro = JSON.stringify(info.repastIntro)
    info.shoppingIntro = JSON.stringify(info.shoppingIntro)
    info.vehiclePrice = info.vehiclePrice ? info.vehiclePrice : '0'
    info.transferAccounts = info.transferAccounts ? info.transferAccounts : '0'
    info.otherPrice = info.otherPrice ? info.otherPrice : '0'
    info.tripPrice = info.tripPrice ? info.tripPrice : '0'
    info.repastPrice = info.repastPrice ? info.repastPrice : '0'
    info.shoppingPrice = info.shoppingPrice ? info.shoppingPrice : '0'
    return info
  }

  private addInfo() {
    const info = this.dealInfo(this.info)
    addConsumeRecord(info).then((result: any) => {
      console.log(result)
      this.$message.success('创建成功')
      this.$router.push({ name: 'consume-list' })
    }).catch((err: any) => {
      console.log(err)
      // this.$message.error('创建失败')
    })
  }

  private updateInfo() {
    const info = this.dealInfo(this.info)
    updateConsumeInfo(info).then(() => {
      this.$message.success('信息更新成功')
      this.$router.push({ name: 'consume-list' })
    }).catch((err) => {
      console.log(err)
      // this.$message.error('更新失败，服务器异常')
    })
  }

  private save(formName: string) {
    (this.$refs[formName] as ElForm).validate((valid: boolean) => {
      if (valid) {
        if (!this.$route.query.consumeId) {
          // 添加
          this.addInfo()
        } else {
          this.updateInfo()
        }
      } else {
        return false
      }
    })
  }
}
</script>
<style lang="scss" >
.consume-details {
  .demo-ruleForm {
    width: 1100px;
  }
  .two-columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-form-item {
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-form-item__label {
        width: 140px;
      }
      .el-form-item__content {
        margin-left: 0px !important;
        width: 430px;
      }
    }
    .left {
      width: 450px;
    }
    .w310 {
      width: 300px;
    }
    .intro {
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      .w200 {
        width: 300px;
        margin-right: 7px;
        // display: inline;
      }
    }
  }
}

</style>
