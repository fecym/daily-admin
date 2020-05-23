/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-11-09 15:46:10
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 17:15:38
 */
/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-11-09 15:46:10
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 15:49:29
 */
export const addOnceDataMap: Function = (info: IConsumeInfo): IObject => ({
  // 餐饮
  0: () => info.repastIntro.push(''),
  // 交通工具
  1: () => info.vehicleIntro.push(''),
  // 零食
  2: () => info.snacksIntro.push(''),
  // 转账
  3: () => info.transferIntro.push(''),
  // 生活用品
  4: () => info.lifeIntro.push(''),
  // 化妆品
  5: () => info.cosmeticIntro.push(''),
  // 旅游
  6: () => info.tripIntro.push(''),
  // 购物
  7: () => info.shoppingIntro.push(''),
  // 其他
  8: () => info.otherIntro.push('')
})
export const deleteOnceDataMap: Function = (
  info: IConsumeInfo,
  idx: number
): IObject => ({
  // 餐饮
  0: () => info.repastIntro.splice(idx, 1),
  // 交通工具
  1: () => info.vehicleIntro.splice(idx, 1),
  // 零食
  2: () => info.snacksIntro.splice(idx, 1),
  // 转账
  3: () => info.transferIntro.splice(idx, 1),
  // 生活用品
  4: () => info.lifeIntro.splice(idx, 1),
  // 化妆品
  5: () => info.cosmeticIntro.splice(idx, 1),
  // 旅游
  6: () => info.tripIntro.splice(idx, 1),
  // 购物
  7: () => info.shoppingIntro.splice(idx, 1),
  // 其他
  8: () => info.otherIntro.splice(idx, 1)
})

// form表单配置详细
export const detailsFormConfigList = [
  {
    left: {
      label: '餐饮',
      prop: 'repastPrice',
      rules: undefined
      // prop: 'repastPrice',
      // rules: [
      //   {
      //     required: true,
      //     message: '请输入您的餐饮金额，不能小于1',
      //     trigger: 'blur'
      //   }
      // ]
    },
    right: {
      detailsLabel: '餐饮消费明细',
      prop: 'repastIntro',
      type: 0
    }
  },
  {
    left: {
      label: '出行',
      prop: 'vehiclePrice',
      rules: undefined
    },
    right: {
      detailsLabel: '出行消费明细',
      prop: 'vehicleIntro',
      type: 1
    }
  },
  {
    left: {
      label: '零食',
      prop: 'snacksPrice',
      rules: undefined
    },
    right: {
      detailsLabel: '零食消费明细',
      prop: 'snacksIntro',
      type: 2
    }
  },
  {
    left: {
      label: '转账',
      prop: 'transferAccounts',
      rules: undefined
    },
    right: {
      detailsLabel: '转账明细',
      prop: 'transferIntro',
      type: 3
    }
  },
  {
    left: {
      label: '生活用品',
      prop: 'lifePrice',
      rules: undefined
    },
    right: {
      detailsLabel: '生活用品消费明细',
      prop: 'lifeIntro',
      type: 4
    }
  },
  {
    left: {
      label: '化妆用品',
      prop: 'cosmeticPrice',
      rules: undefined
    },
    right: {
      detailsLabel: '化妆品消费明细',
      prop: 'cosmeticIntro',
      type: 5
    }
  },
  {
    left: {
      label: '旅游消费',
      prop: 'tripPrice',
      rules: undefined
    },
    right: {
      detailsLabel: '旅游消费明细',
      prop: 'tripIntro',
      type: 6
    }
  },
  {
    left: {
      label: '购物',
      prop: 'shoppingPrice',
      rules: undefined
    },
    right: {
      detailsLabel: '购物消费明细',
      prop: 'shoppingIntro',
      type: 7
    }
  },
  {
    left: {
      label: '其他',
      prop: 'otherPrice',
      rules: undefined
    },
    right: {
      detailsLabel: '其他消费明细',
      prop: 'otherIntro',
      type: 8
    }
  }
]
