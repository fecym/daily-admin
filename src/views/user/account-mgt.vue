<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-18 20:27:26
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-11 21:42:50
 -->
<template>
  <article class="account-mgt public-page">
    <section class="search">
      <el-form
        :inline="true"
        :model="searchQuery"
        class="demo-form-inline"
      >
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="searchQuery.dataArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          />
        </el-form-item>
        <el-form-item
          label="登录名"
          class="ml20"
        >
          <el-input
            v-model="searchQuery.username"
            placeholder="请输入登录名"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="真实姓名"
          class="ml20"
        >
          <el-input
            v-model="searchQuery.realname"
            placeholder="请输入真实姓名"
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
          @click="add"
        >
          新增
        </el-button>
      </div>
    </section>
    <section class="table">
      <el-table
        :data="list"
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          align="center"
          width="50"
        />
        <el-table-column
          prop="username"
          align="center"
          label="登录名"
          show-overflow-tooltip
        />
        <el-table-column
          property="realname"
          align="center"
          label="真实姓名"
          show-overflow-tooltip
        />
        <el-table-column
          property="nickname"
          align="center"
          label="用户昵称"
          show-overflow-tooltip
        />
        <el-table-column
          property="createTime"
          align="center"
          label="创建时间"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span v-if="scope.row.createTime">{{ scope.row.createTime }}</span>
            <span v-else>未获取到时间</span>
          </template>
        </el-table-column>
        <el-table-column
          property="email"
          align="center"
          label="邮箱"
          show-overflow-tooltip
        />
        <el-table-column
          property="phoneNum"
          align="center"
          label="手机号"
          show-overflow-tooltip
        />
        <el-table-column
          property="sex"
          align="center"
          label="性别"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span v-if="scope.row.sex === 0">保密</span>
            <span v-if="scope.row.sex === 1">男</span>
            <span v-if="scope.row.sex === 2">女</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span
              class="modify-btn"
              @click="modify(scope.row)"
            >修改</span>
            <span
              v-if="scope.row.username !== userInfo.username"
              class="modify-btn"
              @click="delAccount(scope.row.id)"
            >删除</span>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section class="pagination">
      <el-pagination
        :current-page="searchQuery.page"
        :page-sizes="PAGE_SIZES"
        :page-size="searchQuery.size"
        :total="totalRow"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </section>
    <el-dialog
      title="用户信息"
      :visible.sync="dialogVisible"
      width="480px"
    >
      <AccountDialog
        :info="rowsInfo"
        @close="closeDialog"
      />
    </el-dialog>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getAccounts } from '@/api/users'
import { parseTime } from '@/utils'
import AccountDialog from './components/dialog-account.vue'
import { UserModule } from '@/store/modules/user'
import { PAGE_SIZES } from '@/utils/constant'
interface ISearchQuery {
  page: number
  size: number
  realname: string
  username: string
  dataArr: Array<string | null>
  startAt: string | null
  endAt: string | null
}
@Component({ components: { AccountDialog } })
export default class AccountMgt extends Vue {
  get userInfo() {
    return UserModule.userInfo
  }

  get PAGE_SIZES() {
    return PAGE_SIZES
  }

  private indexMethod(idx: number) {
    return idx + 1 + (this.searchQuery.page - 1) * this.searchQuery.size
  }

  private searchQuery: ISearchQuery = {
    page: 1,
    size: 10,
    realname: '',
    username: '',
    dataArr: [],
    startAt: '',
    endAt: ''
  }

  private rowsInfo: IUserInfo = {
    id: '',
    username: '',
    realname: '',
    nickname: '',
    password: '',
    email: '',
    sex: 0,
    phoneNum: '',
    headPic: '',
    updateTime: parseTime(new Date()) as string,
    createTime: '',
    sign: ''
  }

  private dialogVisible = false
  private totalRow = 0
  private list: IUserInfo[] = []
  private add() {
    this.rowsInfo = {
      username: '',
      realname: '',
      nickname: '',
      password: '',
      email: '',
      sex: 0,
      phoneNum: '',
      headPic: '',
      sign: '',
      updateTime: parseTime(new Date()) as string,
      createTime: parseTime(new Date()) as string
    }
    this.dialogVisible = true
  }

  private created() {
    this.search()
  }

  private search() {
    this.searchQuery.startAt = this.searchQuery.dataArr
      ? this.searchQuery.dataArr[0]
      : null
    this.searchQuery.endAt = this.searchQuery.dataArr
      ? this.searchQuery.dataArr[1]
      : null
    getAccounts(this.searchQuery)
      .then((data: any) => {
        console.log(data)
        this.list = data.list
        this.totalRow = data.total
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  private handleSizeChange(val: number) {
    this.searchQuery.size = val
    this.search()
  }

  private handleCurrentChange(val: number) {
    this.searchQuery.page = val
    this.search()
  }

  private modify(item: IUserInfo) {
    console.log(item)
    if (item.username === this.userInfo.username) {
      this.$router.push({ name: 'userInfo' })
    } else {
      this.rowsInfo = item
      this.dialogVisible = true
    }
  }

  private delAccount(id: number) {
    console.log(id)
    this.$message.error('抱歉，您没有删除权限')
  }

  private closeDialog(isSaved = false) {
    this.dialogVisible = false
    if (isSaved) this.search()
  }
}
</script>
<style lang="scss" scoped>
// .account-mgt {
//   .el-form-item {
//     margin-bottom: 0;
//   }
// }
</style>
