export interface ITransferInfo {
  id?: number | string
  userId?: number | string
  transferName: string
  createTime: string
  type: number | string
  amount: string | number
  repaymentTime?: string
  transferTime: string
  updateTime: string
}