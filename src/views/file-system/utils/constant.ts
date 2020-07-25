export const tableConf: Array<ITableConf> = [
  {
    label: '上传时间',
    prop: 'createdAt',
    width: '150px'
  },
  {
    label: '文件名',
    prop: 'name'
  },
  {
    label: '文件大小',
    prop: 'size',
    width: '100px'
  },
  {
    label: '文件类型',
    prop: 'type',
    width: '120px'
  },
  {
    label: '上传人',
    prop: 'userId',
    width: '120px',
    dic: {}
  },
  {
    label: '服务器目录',
    prop: 'path'
  },
  {
    label: 'CDN地址',
    prop: 'url'
  }
]
