import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  collection,
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJJsgB6ckkB-7GRCysFcVMyLeRbNaipSc",
  authDomain: "cc-retail-cbe7f.firebaseapp.com",
  projectId: "cc-retail-cbe7f",
  storageBucket: "cc-retail-cbe7f.firebasestorage.app",
  messagingSenderId: "18907515778",
  appId: "1:18907515778:web:187241a9871e1f89f59d9b",
  measurementId: "G-T4ZYZC3D9M",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager({ forceOwnership: false }),
  }),
});
export const productsRef = collection(db, "products");
