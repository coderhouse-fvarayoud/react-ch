import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const getInitialValue = () => {
    try {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (e) {
      return defaultValue
    }
  }
  const [currentValue, setCurrentValue] = useState(getInitialValue())

  const setValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {}
    setCurrentValue(value)
  }

  return [currentValue, setValue]
}

export default useLocalStorage
