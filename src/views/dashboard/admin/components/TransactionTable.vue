<template>
  <el-table
    :data="weekRecords"
    style="width: 100%;padding-top: 15px;"
  >
    <el-table-column
      label="#"
      min-width="50"
      align="center"
    >
      <template slot-scope="{row}">
        {{ row.weekStr }}
      </template>
    </el-table-column>
    <el-table-column
      label="消 费 日 期"
      width="160"
      align="center"
    >
      <template slot-scope="{row}">
        {{ row.createTime }}
      </template>
    </el-table-column>
    <el-table-column
      label="餐饮消费"
      width=""
      align="center"
    >
      <template slot-scope="{row}">
        ¥ {{ row.repastPrice | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="出行消费"
      width=""
      align="center"
    >
      <template slot-scope="{row}">
        ¥ {{ row.vehiclePrice | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="购物消费"
      width=""
      align="center"
    >
      <template slot-scope="{row}">
        ¥ {{ row.shoppingPrice | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="其他消费"
      width=""
      align="center"
    >
      <template slot-scope="{row}">
        ¥ {{ row.otherPrice | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="总消费"
      width=""
      align="center"
    >
      <template slot-scope="{row}">
        ¥ {{ row.totalAmount | toThousandFilter }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue, InjectReactive } from 'vue-property-decorator'
import { ITransactionData } from '@/api/types'
import { getConsumeRecordByCurrentWeek } from '@/api/summary'

@Component({
  name: 'TransactionTable',
  filters: {
    transactionStatusFilter: (status: string) => {
      const statusMap: { [key: string]: string } = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter: (str: string) => str.substring(0, 30),
    // Input 10000 => Output "10,000"
    toThousandFilter: (num: number) => {
      return (+num || 0)
        .toString()
        .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    }
  }
})
export default class extends Vue {
  private list: ITransactionData[] = []

  @InjectReactive()
  readonly dashboardRoot!: any

  created() {
    this.fetchData()
  }

  private mounted() {
    console.log(this.dashboardRoot)
  }

  private weekRecords: any = []

  private async fetchData() {
    try {
      this.weekRecords = await getConsumeRecordByCurrentWeek()
    } catch (error) {
      console.log('extends -> fetchData -> error', error)
    }
  }
}
</script>
