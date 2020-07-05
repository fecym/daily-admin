<template>
  <div class="base-table">
    <el-table
      style="width: 100%"
      :data="data"
      stripe
      tooltip-effect="light"
      border
    >
      <el-table-column
        type="index"
        width="100"
        :index="indexMethod"
        label="序号"
        align="center"
      />
      <el-table-column
        v-for="(item, idx) in tableConf"
        :key="idx"
        show-overflow-tooltip
        align="center"
        :label="item.label"
        :width="item.width || ''"
      >
        <template slot-scope="scope">
          <span v-if="item.dic">{{ item.dic[scope.row[item.prop]] }}</span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="operate"
        width="150"
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="$emit('operate-details', scope.row)"
          >
            详情
          </el-button>
          <el-button
            v-if="isDel"
            type="text"
            @click="$emit('operate-del', scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <section class="pagination">
      <el-pagination
        :hide-on-single-page="true"
        :current-page="queryInfo.page"
        :page-sizes="PAGE_SIZES"
        :page-size="queryInfo.size"
        :total="+total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

import { PAGE_SIZES } from '@/utils/constant'

@Component
export default class BaseTable extends Vue {
  // 表格数据
  @Prop({ required: true }) private data!: Array<IObject>
  // 表格配置项
  @Prop({ required: true }) private tableConf!: Array<ITableConf>
  @Prop({ required: true }) private total!: number
  // 操作权限
  @Prop({ default: false }) private operate!: boolean
  // 是否提供删除功能
  @Prop({ default: false }) private isDel!: boolean
  @Prop({
    default: () => ({
      size: 5,
      page: 1
    })
  })
  private queryInfo!: IObject

  get PAGE_SIZES() {
    return PAGE_SIZES
  }

  @Watch('data')
  private onLangChange(val: any) {
    console.log(this.data, val)
  }

  public indexMethod(idx: number) {
    return idx + 1 + (this.queryInfo.page - 1) * this.queryInfo.size
  }

  public handleCurrentChange(val: number) {
    this.$emit('current-change', val)
  }

  public handleSizeChange(val: number) {
    this.$emit('size-change', val)
  }
}
</script>

<style></style>
