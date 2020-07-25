<template>
  <div class="transfer-account public-page">
    <section class="search">
      <el-form
        :inline="true"
        :model="queryInfo"
        class="demo-form-inline"
      >
        <el-form-item label="上传日期">
          <el-date-picker
            v-model="queryInfo.createAt"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="上传人">
          <el-select
            v-model="queryInfo.userId"
            placeholder="请选择上传人"
            clearable
            filterable
          >
            <el-option
              v-for="item in userNameTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="文件名称">
          <el-input
            v-model="queryInfo.name"
            placeholder="请输入文件名称"
            clearable
          />
        </el-form-item>
      </el-form>
      <div class="search-btn">
        <el-button
          type="primary"
          @click="search"
        >
          查询
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="$router.push({name: 'transfer-details'})"
        >
          新增
        </el-button>
      </div>
    </section>
    <base-table
      :data="list"
      :table-conf="tableConf"
      :total="total"
      :query-info="queryInfo"
      operate="true"
      :is-del="false"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      @operate-details="gotoDetails"
      @operate-del="del"
    />
    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogTitle"
      append-to-body
    >
      <img
        width="100%"
        :src="dialogImageUrl"
        alt
      >
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IQueryInfo, IFileInfo } from './utils/types'
import { tableConf } from './utils/constant'

import BaseTable from '@/components/BaseTable.vue'
import { getUserSelectNames } from '@/api/users'
import { getFileList } from '@/api/file'
import { parseLabelToDic } from '@/utils'

@Component({ components: { BaseTable } })
export default class TransferAccount extends Vue {
  private tableConf: Array<ITableConf> = [...tableConf]
  private total = 0
  private dialogVisible = false
  private dialogImageUrl = ''
  private dialogTitle = ''
  private queryInfo: IQueryInfo = {
    createAt: '',
    userId: '',
    name: '',
    page: 1,
    size: 10
  }

  private list: Array<IFileInfo> = []
  private userNameTypes: Array<IType> = []
  private userNameDic: Array<IDic> = []
  private created() {
    this.initTypes()
    this.search()
  }

  private async initTypes() {
    try {
      const [userNameTypes] = await Promise.all([getUserSelectNames()])
      this.userNameTypes = userNameTypes as any
      this.userNameDic = parseLabelToDic(userNameTypes)
      // @ts-ignore
      this.tableConf[4].dic = this.userNameDic
    } catch (e) {
      console.log('TransferAccount -> initTypes -> e', e)
    }
  }

  private async search() {
    try {
      const { list, total } = (await getFileList(this.queryInfo)) as IObject
      this.list = list
      console.log('TransferAccount -> search -> this.list', this.list)
      this.total = total
    } catch (e) {
      console.log('TransferAccount -> search -> e', e)
    }
  }

  private handleCurrentChange(val: number) {
    this.queryInfo.page = val
    this.search()
  }

  private handleSizeChange(val: number) {
    this.queryInfo.size = val
    this.search()
  }

  private gotoDetails(row: IFileInfo) {
    console.log('TransferAccount -> gotoDetails -> row', row)
    this.dialogVisible = true
    this.dialogImageUrl = row.url
    this.dialogTitle = row.name
  }

  private del(row: IFileInfo) {
    console.log('TransferAccount -> del -> row', row)
  }
}
</script>

<style>
</style>
