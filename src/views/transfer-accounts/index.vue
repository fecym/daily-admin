<template>
  <div class="transfer-account public-page">
    <section class="search ">
      <el-form
        :inline="true"
        :model="queryInfo"
        class="demo-form-inline"
      >
        <el-form-item label="转账时间">
          <el-date-picker
            v-model="queryInfo.dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd hh:mm:ss"
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
        <el-form-item label="借钱人">
          <el-input
            v-model="queryInfo.username"
            placeholder="请输入借钱人"
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
      operate
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { transferTypes } from './utils/constant'
import BaseTable from '@/components/BaseTable.vue'

@Component({ components: { BaseTable } })
export default class TransferAccount extends Vue {
  public get transferTypes(): Array<IType> {
    return transferTypes
  }

  private queryInfo: IObject = {}
  private tableConf: Array<ITableConf> = []
  private total = 0
  private list: Array<IObject> = []

  private search() {}
}
</script>

<style>
</style>
