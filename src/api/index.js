import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  increment,
} from 'firebase/firestore'
import { db } from '../utils/firebase'

//Se usa para obtener todos los productos de firebase o filtrarlos por categoría
export const fetchProducts = async (categoryID) => {
  let customQuery = collection(db, 'products')
  if (categoryID) {
    customQuery = query(customQuery, where('category', '==', categoryID))
  }
  console.log('Fetching products...', categoryID)
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
  console.log('Fetching product...', id)
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
  console.log('Fetching categories...')
  const res = await getDocs(dbCategoriesRef)
  const data = res.docs.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    }
  })
  return data
}

export const addOrder = (order) => {
  return addDoc(collection(db, 'orders'), order)
}

export const reduceStock = async (productId, amount) => {
  const dbItemRef = doc(db, 'products', productId)
  await updateDoc(dbItemRef, {
    stock: increment(-amount),
  })
}
