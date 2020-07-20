<template>
  <div class="public-page">
    <el-form
      :inline="true"
      :model="queryInfo"
      class="search"
    >
      <el-form-item label="排序">
        <el-radio-group v-model="reverse">
          <el-radio :label="true">
            倒序
          </el-radio>
          <el-radio :label="false">
            正序
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- lendOutMoney -->
      <el-form-item
        label="共借出去："
        style="margin-left:50px"
      >
        <span>￥{{ lendOutMoney }}</span>
      </el-form-item>
      <el-form-item
        label="转账人"
        style="margin-left:50px"
      >
        <el-input
          v-model="queryInfo.transferName"
          class="w220"
          placeholder="请输入借钱人"
          clearable
        />
      </el-form-item>
      <div class="search-btn">
        <el-button
          type="primary"
          @click="getList"
        >
          查询
        </el-button>
      </div>
    </el-form>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(item,idx) in list"
        :key="idx"
        :timestamp="item.transferTime"
        placement="top"
      >
        <el-card>
          <h4>{{ item.transferName }}</h4>
          <p>
            <span>{{ item.transferName }}</span>
            <span>向我</span>
            &nbsp;
            <el-tag
              v-if="+item.type === 1"
              type="warning"
            >
              {{ transferDic[item.type] }}
            </el-tag>
            <el-tag
              v-else
              type="danger"
            >
              {{ transferDic[item.type] }}
            </el-tag>&emsp;
            <span>{{ item.amount }}</span>
            &nbsp;
            <span>元</span>
          </p>
          <p v-if="item.repaymentTime">
            还钱时间：{{ item.repaymentTime }}
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getAllTransferRecords } from '@/api/transfer'
import { ITransferInfo } from './utils/types'
import { transferDic } from './utils/constant'
import { formatPrice } from '@/utils'

@Component
export default class Timeline extends Vue {
  get transferDic() {
    return transferDic
  }

  private reverse = false
  private queryInfo: IObject = {
    page: 1,
    size: 10,
    transferTime: '',
    type: '',
    transferName: '',
    amount: ''
  }

  private lendOutMoney: number | string = 0
  private list: Array<ITransferInfo> = []
  private async getList() {
    try {
      this.list = (await getAllTransferRecords(this.queryInfo)) as any
      const lendOutMoney = this.list.reduce((prev: any, curr: any) => {
        const value = Number(curr.amount)
        if (!isNaN(value)) {
          if (curr.type === 0) {
            return prev + value
          } else {
            return prev - value
          }
        } else {
          return prev
        }
      }, 0)
      this.lendOutMoney = formatPrice(lendOutMoney)
    } catch (e) {
      console.log('Timeline -> getList -> e', e)
    }
  }

  private created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.feature {
  display: flex;

  margin-bottom: 20px;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}
</style>
