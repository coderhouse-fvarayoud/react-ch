import categories from '../data/categories.json'
import {
  faSun,
  faMoon,
  faSnowflake,
  faImages,
} from '@fortawesome/free-regular-svg-icons'

export const getCategoryName = (id) => {
  return categories.find((category) => category.id === id).name || ''
}

export const getCategoryIcon = (id) => {
  switch (id) {
    case 1:
      return faSun
    case 2:
      return faMoon
    case 3:
      return faSnowflake
    default:
      return faImages
  }
}
