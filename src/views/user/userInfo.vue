<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-14 21:43:11
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-11 21:40:02
 -->
<template>
  <article class="user-info public-page">
    <el-tabs>
      <el-tab-pane label="基础信息">
        <BaseInfo />
      </el-tab-pane>
      <el-tab-pane label="更改基本信息">
        <UpdateInfo />
      </el-tab-pane>
      <el-tab-pane label="更改密码">
        <UpdatePassword />
      </el-tab-pane>
    </el-tabs>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInfo from './components/base-info.vue'
import UpdateInfo from './components/update-info.vue'
import UpdatePassword from './components/update-password.vue'
@Component({ components: { BaseInfo, UpdateInfo, UpdatePassword } })
export default class UserInfo extends Vue {}
</script>
