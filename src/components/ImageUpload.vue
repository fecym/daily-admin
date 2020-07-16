<template>
  <el-upload
    :action="uploadApi"
    list-type="picture-card"
    :auto-upload="true"
    multiple
    name="files"
    :limit="5"
    drag
    accept="images/*"
    v-bind="$attrs"
    @on-exceed="handleExceed"
  >
    <i slot="default" class="el-icon-plus" />
    <div slot="file" slot-scope="{file}">
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
      <span class="el-upload-list__item-actions">
        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
          <i class="el-icon-zoom-in" />
        </span>
        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
          <i class="el-icon-download" />
        </span>
        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
          <i class="el-icon-delete" />
        </span>
      </span>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </el-upload>
</template>

<script lang="ts">
import { FILE_API } from '@/api/file'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ImageUpload extends Vue {

  @Prop({ default: () => ([]) }) private value!: Array<any>

  get uploadApi() {
    return FILE_API + '/upload'
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
  private handleExceed(files: any, fileList: any) {
    console.log("ImageUpload -> handleExceed -> files, fileList", files, fileList)
    this.$message.warning(`当前限制选择 ${this.$attrs.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
  }
}
</script>

<style>
</style>