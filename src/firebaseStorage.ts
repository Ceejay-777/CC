import { FirebaseError } from 'firebase/app';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  doc,
  query,
//   where,
  orderBy,
  getDoc,
} from 'firebase/firestore';
import { ProductDetail, SavedProductDetail } from "types";

const productsRef = collection(db, 'products')

export async function fbGetProducts(): Promise<SavedProductDetail[]> {
    try {
        const snapshot = await getDocs(query(productsRef, orderBy('createdAt', 'desc')));
        return snapshot.docs.map(doc => ({
          ...(doc.data() as SavedProductDetail),
          id: doc.id
        }));
    } catch (error) {
        if (error instanceof FirebaseError && error.code === 'unavailable') {
            console.error("Network issue: Could not connect to Firestore. Please check your connection.");
        } else {
            console.error("Error:", error);
        }
        return []; 
    }
}

export async function fbAddProduct(product: ProductDetail) {
  const newProduct = {
    ...product,
    originalId: Date.now().toString(),
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };
  const docRef = await addDoc(productsRef, newProduct);
  return {
    ...newProduct,
    id: docRef.id,
  };
}

export async function fbUpdatePrice(
  productId: string,
  newName: string,
  newPrice: number
) {
  const productRef = doc(db, "products", productId);
  await updateDoc(productRef, {
    name: newName,
    price: newPrice,
    lastUpdated: new Date().toISOString(),
  });
}

// Delete product
export async function fbDeleteProduct(productId: string) {
  const productRef = doc(db, "products", productId);
  await deleteDoc(productRef);
}

// Search products
export async function fbSearchProducts(searchTerm: string) {
  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map((doc) => ({
    ...(doc.data() as SavedProductDetail),
    id: doc.id,
  }));
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Get single product
export async function fbGetSingleProduct(productId: string) {
  const productRef = doc(db, "products", productId);
  const snapshot = await getDoc(productRef);
  console.log(snapshot)
  if (!snapshot.exists()) return null;
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}