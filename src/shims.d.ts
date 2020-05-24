declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}

declare module '*.gif' {
  export const gif: any
}

// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'

// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to'

// TODO: remove this part after vuedraggable has its typescript file
declare module 'vuedraggable'

// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'

// TODO: remove this part after vue-splitpane has its typescript file
declare module 'vue-splitpane'

// 定义 locale
declare module 'element-ui/lib/locale'

declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

interface IObject {
  [kyes: string]: any
}

interface IUserInfo {
  id?: string | number
  username: string
  realname: string
  nickname: string
  password?: string
  confirmPass?: string
  email: string
  sex: number
  phoneNum: number | string
  headPic: string
  avatar?: string
  updateTime?: string
  createTime?: string
  isGuide?: number
  sign: string
}

interface IConsumeInfo {
  id?: string | number
  userId: number | string
  username: string
  createTime: string
  updateTime: string
  // 餐饮
  repastPrice: string
  repastIntro: Array<string>
  // 出行工具
  vehiclePrice: string
  vehicleIntro: Array<string>
  // 零食
  snacksPrice: string
  snacksIntro: Array<string>
  // 转账
  transferAccounts: string
  transferIntro: Array<string>
  // 生活用品
  lifePrice: string
  lifeIntro: Array<string>
  // 化妆品
  cosmeticPrice: string
  cosmeticIntro: Array<string>
  // 旅游
  tripPrice: string
  tripIntro: Array<string>
  // 购物
  shoppingPrice: string
  shoppingIntro: Array<string>
  // 其他
  otherPrice: string
  otherIntro: Array<string>
}

interface IConsumeResponseInfo {
  consumeId?: string | number
  username: string
  createTime: string
  updateTime: string
  // 餐饮
  repastPrice: string
  repastIntro: string
  // 出行工具
  vehiclePrice: string
  vehicleIntro: string
  // 零食
  snacksPrice: string
  snacksIntro: string
  // 转账
  transferAccounts: string
  transferIntro: string
  // 生活用品
  lifePrice: string
  lifeIntro: string
  // 化妆品
  cosmeticPrice: string
  cosmeticIntro: string
  // 旅游
  tripPrice: string
  tripIntro: string
  // 购物
  shoppingPrice: string
  shoppingIntro: string
  // 其他
  otherPrice: string
  otherIntro: string
}
