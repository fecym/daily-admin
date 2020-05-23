export const numberToFixed2 = (data: IObject) => {
  Object.keys(data).forEach((key: string) => {
    if (typeof data[key] === 'number' && key !== 'consumeId') {
      data[key] = data[key].toFixed(2)
    }
  })
  return data
}

export const numberToFixed2Number = (data: IObject) => {
  Object.keys(data).forEach((key: string) => {
    if (typeof data[key] === 'number' && key !== 'consumeId') {
      data[key] = ~~(data[key] * 100) / 100
    }
  })
  return data
}

export const formatPrice = (price: number | string) => {
  return parseFloat(price as string).toLocaleString('zh', { style: 'decimal' })
}
