<template>
  <div class="transfer-account public-page">
    <section class="search">
      <el-form
        :inline="true"
        :model="queryInfo"
        class="demo-form-inline"
      >
        <el-form-item label="转账时间">
          <el-date-picker
            v-model="queryInfo.transferTime"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="转账类型">
          <el-select
            v-model="queryInfo.type"
            placeholder="请选择转账类型"
            clearable
          >
            <el-option
              v-for="item in transferTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="转账人">
          <el-input
            v-model="queryInfo.transferName"
            placeholder="请输入借钱人"
            clearable
          />
        </el-form-item>
        <el-form-item label="转账金额">
          <el-input
            v-model="queryInfo.amount"
            placeholder="请输入转账金额范围"
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
      :operate="true"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      @operate-details="gotoDetails"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { transferTypes } from './utils/constant'
import { ITransferInfo } from './utils/types'

import BaseTable from '@/components/BaseTable.vue'
import { getTransferList } from '@/api/transfer'

@Component({ components: { BaseTable } })
export default class TransferAccount extends Vue {
  public get transferTypes(): Array<IType> {
    return transferTypes
  }

  private queryInfo: IObject = {
    page: 1,
    size: 10,
    transferTime: '',
    type: '',
    transferName: '',
    amount: ''
  }

  private tableConf: Array<ITableConf> = [
    {
      label: '转账时间',
      prop: 'transferTime'
    },
    {
      label: '转账人',
      prop: 'transferName'
    },
    {
      label: '转账金额',
      prop: 'amount'
    },
    {
      label: '转账类型',
      prop: 'type',
      dic: { 0: '借钱', 1: '还钱' }
    },
    {
      label: '转账方式',
      prop: 'transferMode',
      dic: { 1: '支付宝', 2: '微信', 3: '银行卡' }
    },
    {
      label: '还款时间',
      prop: 'repaymentTime'
    }
  ]

  private total = 0
  private list: Array<IObject> = []

  private created() {
    this.search()
  }

  private async search() {
    try {
      const { list, total } = (await getTransferList(this.queryInfo)) as IObject
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

  private gotoDetails(row: ITransferInfo) {
    this.$router.push({
      name: 'transfer-details',
      query: { id: row.id as string }
    })
  }
}
</script>

<style>
</style>
