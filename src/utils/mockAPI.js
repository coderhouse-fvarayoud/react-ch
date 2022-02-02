import dataItems from '../data/items.json'

export const fetchItems = (categoryID) => {
  const items = categoryID
    ? dataItems.filter((item) => item.category === categoryID)
    : dataItems

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (items.length) resolve(items)
      else reject('No se encontraron productos')
    }, 1000)
  })
}

export const fetchItemDetail = (id) => {
  const item = dataItems.find((item) => item.id === id)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item) resolve(item)
      else reject('No se encontro producto')
    }, 1000)
  })
}
