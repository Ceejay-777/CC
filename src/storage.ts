import { products } from "../data";
import { ProductDetail, SavedProductDetail } from "types";

export function getProducts(): SavedProductDetail[] {
  const productsString = localStorage.getItem("products");
  return productsString ? JSON.parse(productsString) : [];
}

export function saveProducts(products: SavedProductDetail[]) {
  localStorage.setItem("products", JSON.stringify(products));
}

export function addProduct(product: ProductDetail) {
  const products = getProducts();
  const newProduct: SavedProductDetail = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
}

export const addData = () => {
  products.forEach((product) => {
    addProduct(product);
  });
};

export function updatePrice(productId: string, newName: string, newPrice: number) {
  const products = getProducts();
  const updatedProducts = products.map((product: SavedProductDetail) => {
    if (product.id === productId) {
      return {
        ...product,
        name: newName,
        price: newPrice,
        lastUpdated: new Date().toISOString(),
      };
    }
    return product;
  });
  saveProducts(updatedProducts);
}

export function deleteProduct(productId: string) {
  const products = getProducts();
  const updatedProducts = products.filter(
    (product: SavedProductDetail) => product.id !== productId
  );
  saveProducts(updatedProducts);
}

export function searchProducts(searchTerm: string) {
        console.log(searchTerm)
        const products = getProducts();
        const searchResults: SavedProductDetail[] = products.filter((product: SavedProductDetail) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return searchResults || []
}

export const getSingleProduct = (productId: string) => {
    const products = getProducts()
    const product: SavedProductDetail | undefined = products.find((product) => productId === product.id)
    return product || null
}