import data from '../data/data.json'

export const fetchItems = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000)
  })
