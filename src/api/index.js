import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from 'firebase/firestore'
import { db } from '../utils/firebase'

//Se usa para obtener todos los productos de firebase o filtrarlos por categoría
export const fetchProducts = async (categoryID) => {
  let customQuery = collection(db, 'products')
  if (categoryID) {
    customQuery = query(customQuery, where('category', '==', categoryID))
  }
  const res = await getDocs(customQuery)
  const data = res.docs.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    }
  })
  return data
}

export const fetchProductById = async (id) => {
  const dbItemRef = doc(db, 'products', id)
  const res = await getDoc(dbItemRef)
  const data = res.data()
  if (data) {
    return {
      id: res.id,
      ...data,
    }
  } else return null
}

export const addItems = async (data, objetive) => {
  if (!data.length || !objetive) return
  data.forEach(async (item) => {
    console.log('Adding: ', item)
    return addDoc(collection(db, objetive), item)
  })
}

export const fetchCategories = async () => {
  const dbCategoriesRef = collection(db, 'categories')
  const res = await getDocs(dbCategoriesRef)
  const data = res.docs.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    }
  })
  return data
}
