import { deepFreeze, parseLabelToDic } from '@/utils'
export const transferTypes: Array<IType> = deepFreeze([
  {
    label: '借钱',
    value: 0
  },
  {
    label: '还钱',
    value: 1
  }
])

export const transferDic: IDic = parseLabelToDic(transferTypes)

export const transferModes: Array<IType> = [
  {
    label: '支付宝',
    value: 1
  },
  {
    label: '微信',
    value: 2
  },
  {
    label: '银行卡',
    value: 3
  }
]

export const transferModeDic: IDic = parseLabelToDic(transferModes)
