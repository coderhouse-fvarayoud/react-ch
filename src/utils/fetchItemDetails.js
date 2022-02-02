import data from '../data/data.json'

export const fetchItemDetail = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(data.filter((item) => item.id === id)), 1000)
  })
