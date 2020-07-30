<template>
  <div class="file-upload">
    <el-upload
      :action="uploadApi"
      list-type="picture-card"
      :auto-upload="true"
      multiple
      :headers="{Authorization: token}"
      name="files"
      drag
      v-bind="$attrs"
      :on-exceed="handleExceed"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-upload="beforeUpload"
      :file-list="fileList"
    >
      <i class="el-icon-plus" />
      <div
        slot="tip"
        class="el-upload__tip"
      >
        只能上传图片文件，且不超过 2 MB
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img
        width="100%"
        :src="dialogImageUrl"
        alt
      >
    </el-dialog>
  </div>
</template>

<script lang="ts">
import mime from 'mime'
import { FILE_API } from '@/api/file'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ImageUpload extends Vue {
  @Prop({ default: () => [] }) private value!: Array<any>
  // 文件大小
  @Prop({ default: 2 }) private size!: number
  // 单位
  @Prop({ default: 'MB' }) private unit!: any

  get uploadApi() {
    return FILE_API + '/upload'
  }

  get pageId() {
    return this.$route.query.id || ''
  }

  get token() {
    return `Bearer ${sessionStorage.getItem('token')}`
  }

  get fileList() {
    return [...this.value]
  }

  get filePath() {
    return process.env.VUE_APP_FILE_PATH
  }

  private dialogImageUrl = ''
  private dialogVisible = false
  private disabled = false
  private handleRemove(file: File, fileList: any) {
    console.log(
      'ImageUpload -> handleRemove -> fileList',
      file,
      fileList,
      this.pageId
    )
    if (this.pageId) {
      this.$emit('input', fileList)
    } else {
      this.$emit('input', this.formatFileList(fileList))
    }
  }

  private formatFileList(fileList = []) {
    return fileList.map((item: IObject) => {
      if (item.id) {
        return item
      } else if (item.response) {
        return item.response.data
      }
    })
  }

  private handleError(err: Error, file: File, fileList: any) {
    console.log('ImageUpload -> handleError -> err.message', err.message, file, fileList)
    this.$message.error('上传失败')
  }

  private handleSuccess(res: any, file: File, fileList: any) {
    console.log('ImageUpload -> handleSuccess -> fileList', fileList)
    this.$emit('input', this.formatFileList(fileList))
  }

  private handlePictureCardPreview(file: any) {
    console.log('ImageUpload -> handlePictureCardPreview -> file', file)
    this.dialogImageUrl = file.url
    this.dialogVisible = true
  }

  private handleDownload(file: File) {
    console.log(file)
  }

  private beforeUpload(file: File) {
    const unitSize: IObject = {
      KB: 1024,
      MB: 1024 * 1024
    }
    const isSizeLimit = file.size / unitSize[this.unit] < this.size
    if (!isSizeLimit) {
      this.$message({
        message: '上传文件大小不能超过' + this.size + this.unit + '!',
        type: 'warning'
      })
    }
    // 处理文件上传类型
    let isAllowFileType = true
    /**
     * 文件格式限制功能暂不支持 image/* 格式的过滤
     */
    if (this.$attrs.accept) {
      const accept = this.$attrs.accept.split(',').map(x => {
        // 兼容 .jpg 或者 jpg 开头为主的 accept 属性
        const trimType = x.trim()
        const result = trimType.slice(trimType.indexOf('/') + 1)
        return mime.getType(result)
      })
      isAllowFileType = accept.includes(file.type)
      if (!isAllowFileType) {
        this.$message({
          message: '不支持此格式上传!',
          type: 'warning'
        })
      }
    }
    return isAllowFileType && isSizeLimit
  }

  private handleExceed(files: any, fileList: any) {
    this.$message.warning(
      `当前限制选择 ${this.$attrs.limit} 个文件，本次选择了 ${
        files.length
      } 个文件，共选择了 ${files.length + fileList.length} 个文件`
    )
  }
}
</script>

<style lang="scss" scoped>
.file-upload {
  & ::v-deep {
    .el-upload--picture-card {
      border: none;
    }
    .el-upload-dragger {
      width: inherit;
      height: inherit;
    }
  }
}
</style>
