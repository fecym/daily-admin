<template>
  <div class="form">
    <el-form :model="info" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="转账时间" prop="transferTime">
        <el-date-picker v-model="info.transferTime" type="date" placeholder="选择日期" class="w220"></el-date-picker>
      </el-form-item>
      <el-form-item label="转账人" prop="transferName">
        <el-input v-model="info.transferName" style="width: 220px" placeholder="请输入转账人姓名" clearable></el-input>
      </el-form-item>
      <el-form-item label="转账金额" prop="amount">
        <!-- <el-input v-model="info.amount"></el-input> -->
        <el-input-number v-model="info.amount" :min="1" :step="10" :precision="2" label="转账金额"  style="width: 220px"></el-input-number>
      </el-form-item>
      <el-form-item label="转账类型" prop="type">
        <el-select v-model="info.type" placeholder="请选择转账类型" clearable class="w220">
          <el-option
            v-for="item in transferTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="还款时间" prop="repaymentTime" v-if="info.type === '0'">
        <el-date-picker v-model="info.repaymentTime" type="date" placeholder="选择日期" class="w220"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ITransferInfo } from './utils/types'
import { transferTypes } from './utils/constant'

@Component
export default class TransferAccountDetails extends Vue {
  get transferTypes() {
    return transferTypes
  }
  private info: ITransferInfo = {
    transferName: '',
    createTime: '',
    type: '0',
    amount: 0,
    repaymentTime: '',
    transferTime: '',
    updateTime: ''
  }
  private rules: any = {
    transferName: [
      { required: true, message: '请输入转账者姓名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    amount: [{ required: true, message: '请输入转账金额', trigger: 'blur' }],
    type: [{ required: true, message: '请选择转账类型', trigger: 'change' }],
    transferTime: [
      { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
    ]
  }
  private submitForm(formName: string) {
    // @ts-ignore
    this.$refs[formName].validate((valid: boolean) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.el-input-number {
  width: inherit;
}
</style>
