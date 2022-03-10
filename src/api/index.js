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
import initialProducts from '../data/initialProducts.json'

export const fetchProducts = async (categoryKey) => {
  let customQuery = collection(db, 'products')
  if (categoryKey) {
    const categoryID = await fetchCategoryIDbyKey(categoryKey)
    if (categoryID) {
      customQuery = query(customQuery, where('category', '==', categoryID))
    } else return []
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

export const reloadProducts = async () => {
  const data = initialProducts
  if (!data.length) return
  data.forEach(async (item) => {
    addDoc(collection(db, 'products'), item)
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

export const fetchCategoryIDbyKey = async (key) => {
  let customQuery = collection(db, 'categories')
  if (!key) return null
  customQuery = query(customQuery, where('key', '==', key))
  const res = await getDocs(customQuery)
  const data = res.docs.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    }
  })
  let id = null
  if (data.length) {
    id = data[0].id
  }
  return id
}

export const fetchOrders = async () => {
  const dbOrdersRef = collection(db, 'orders')
  const res = await getDocs(dbOrdersRef)
  const data = res.docs.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    }
  })
  console.log('Ordenes actuales: ', data)
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
