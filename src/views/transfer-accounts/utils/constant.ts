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
