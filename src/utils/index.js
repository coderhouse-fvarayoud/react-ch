import {
  faSun,
  faMoon,
  faSnowflake,
  faImages,
} from '@fortawesome/free-regular-svg-icons'

export const getCategoryIcon = (id) => {
  switch (id) {
    case '20U57dXl8fl6W8KGAPKx':
      return faSun
    case '8LGAgXw40pw5NYTdujw6':
      return faMoon
    case 'jtvDChUzcDl6uQormBYF':
      return faSnowflake
    default:
      return faImages
  }
}
