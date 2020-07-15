<template>
  <div class="form">
    <el-form
      ref="ruleForm"
      :model="info"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="转账时间"
        prop="transferTime"
      >
        <el-date-picker
          v-model="info.transferTime"
          type="datetime"
          placeholder="选择日期"
          class="w220"
        />
      </el-form-item>
      <el-form-item
        label="转账人"
        prop="transferName"
      >
        <el-input
          v-model="info.transferName"
          style="width: 220px"
          placeholder="请输入转账人姓名"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="转账金额"
        prop="amount"
      >
        <!-- <el-input v-model="info.amount"></el-input> -->
        <el-input-number
          v-model="info.amount"
          :min="1"
          :step="10"
          :precision="2"
          label="转账金额"
          style="width: 220px"
        />
      </el-form-item>
      <el-form-item
        label="转账类型"
        prop="type"
      >
        <!-- <el-select
          v-model="info.type"
          placeholder="请选择转账类型"
          clearable
          class="w220"
        >
          <el-option
            v-for="item in transferTypes"
            :key="item.value"
            :label="item.label"
            :value="+item.value"
          />
        </el-select>-->
        <el-radio-group v-model.number="info.type">
          <el-radio
            v-for="item in transferTypes"
            :key="item.value"
            :label="+item.value"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        v-if="info.type === 0"
        label="还款时间"
        prop="repaymentTime"
      >
        <el-date-picker
          v-model="info.repaymentTime"
          type="datetime"
          placeholder="选择日期"
          class="w220"
        />
      </el-form-item>
      <el-form-item
        label="转账方式"
        prop="transferMode"
      >
        <!-- <el-select v-model="info.transferMode" placeholder="请选择转账方式" clearable class="w220">
          <el-option
            v-for="item in transferModes"
            :key="item.value"
            :label="item.label"
            :value="+item.value"
          />
        </el-select> -->
        <el-radio-group v-model.number="info.transferMode">
          <el-radio
            v-for="item in transferModes"
            :key="item.value"
            :label="+item.value"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item
        label="转账截图"
        prop="files"
      >
        <el-upload
          :action="uploadApi"
          list-type="picture-card"
          :auto-upload="true"
          multiple
          name="files"
          :limit="5"
        >
          <i
            slot="default"
            class="el-icon-plus"
          />
          <div
            slot="file"
            slot-scope="{file}"
          >
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete" />
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img
            width="100%"
            :src="dialogImageUrl"
            alt
          >
        </el-dialog>
      </el-form-item>

      <el-form-item
        label="备注"
        prop="remake"
      >
        <!-- style="width: 220px" -->
        <el-input
          v-model="info.remake"
          placeholder="还有什么要补充的..."
          type="textarea"
          :autosize="{minRows: 2, maxRows: 4}"
          show-word-limit
          maxlength="500"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ITransferInfo } from './utils/types'
import { transferTypes, transferModes } from './utils/constant'
import {
  createTransferRecord,
  updateTransferRecord,
  getTransferInfo
} from '@/api/transfer'

import { FILE_API } from '@/api/file'

@Component
export default class TransferAccountDetails extends Vue {
  get uploadApi() {
    return FILE_API + '/upload'
  }

  get downlowFilePath() {
    return process.env.FILE_PATH
  }

  get transferTypes() {
    return transferTypes
  }

  get transferModes() {
    return transferModes
  }

  get id() {
    return this.$route.query.id || ''
  }

  private dialogImageUrl = ''
  private dialogVisible = false
  private disabled = false

  private handleRemove(file: File) {
    console.log(file)
  }

  private handlePictureCardPreview(file: any) {
    console.log(
      'TransferAccountDetails -> handlePictureCardPreview -> file',
      file
    )
    this.dialogImageUrl = file.url
    this.dialogVisible = true
  }

  private handleDownload(file: File) {
    console.log(file)
  }

  private info: ITransferInfo = {
    transferName: '',
    createTime: '',
    type: 0,
    amount: 0,
    repaymentTime: '',
    transferTime: '',
    updateTime: '',
    transferMode: 1,
    files: [],
    remake: ''
  }

  private rules: any = {
    transferName: [
      { required: true, message: '请输入转账者姓名', trigger: 'blur' },
      { min: 2, max: 9, message: '长度在 2 到 9 个字符', trigger: 'blur' }
    ],
    amount: [{ required: true, message: '请输入转账金额', trigger: 'blur' }],
    type: [{ required: true, message: '请选择转账类型', trigger: 'change' }],
    transferMode: [
      { required: true, message: '请选择转账方式', trigger: 'change' }
    ],
    transferTime: [
      { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
    ]
  }

  private created() {
    if (this.id) {
      this.getInfo()
    }
  }

  private async getInfo() {
    try {
      this.info = (await getTransferInfo({ id: this.id })) as any
    } catch (e) {
      console.log('TransferAccountDetails -> getInfo -> e', e)
    }
  }

  private async create() {
    try {
      await createTransferRecord(this.info)
      this.$message.success('创建成功')
      this.$router.push({ name: 'transfer-list' })
    } catch (e) {
      console.log('TransferAccountDetails -> submitForm -> e', e)
    }
  }

  private async updateInfo() {
    console.log('修改数据成功')

    try {
      await updateTransferRecord(this.info)
      this.$message.success('修改数据成功')
      this.$router.push({ name: 'transfer-list' })
    } catch (e) {
      console.log('TransferAccountDetails -> submitForm -> e', e)
    }
  }

  private submitForm(formName: string) {
    console.log('TransferAccountDetails -> submitForm -> formName', formName)
    // @ts-ignore
    this.$refs[formName].validate((valid: boolean) => {
      console.log('TransferAccountDetails -> submitForm -> valid', valid)
      if (valid) {
        if (this.id) {
          this.updateInfo()
        } else {
          this.create()
        }
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
