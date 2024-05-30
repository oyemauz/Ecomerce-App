import { collection, getDoc, getDocs, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../config/firebase.config';
import { getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import { storageRef as sRef } from "../config/firebaseStorage.config";
import { DB_COLLECTIONS } from "../constants/db.constants"

// Export all products from database

export async function getProducts() {
  const productsCol = collection(db, "Products");
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  if (productList.length > 0) {
    return productList;
  } else {
    console.error("No products found!");
  }
}

export async function getProductID(id) {
  const productsCol = doc(db, "Products", id);
  const docSnap = await getDoc(productsCol);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

// add new product into database.
export async function CreateNewProduct(items) {

  const { name, price, imageUrl, quantity } = items;
  const url = await uploadImageOnFireStore(imageUrl[0]);
  const colRef = collection(db, DB_COLLECTIONS.PRODUCTS);
  const docRef = doc(colRef);
  await setDoc(docRef, {
    id: docRef.id,
    name,
    price: Number(price),
    rating: Number(0),
    unitPrice: DB_COLLECTIONS.UNIT_PRICE,
    imageUrl: url,
    quantity: Number(quantity),
    status: items.status
  });
}

export async function updateProduct(items) {
  console.log(items.id)
  if (!items || !items.id) {
    console.error("Invalid items object:", items);
    throw new Error("Invalid items object");
  }

  const productRef = doc(db, "Products", items.id);

  const url = await uploadImageOnFireStore(items.imageUrl);
  console.log("image url-> ", url)
  try {
    await updateDoc(productRef, {
      ...items,
      imageUrl: url
    });

    console.log("Product updated successfully");
    return { success: true, message: "Product updated successfully" };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, message: "Error updating product", error };
  }
}


// upload image into firebase storage
async function uploadImageOnFireStore(file) {
  const storage = getStorage();
  const storageRefInstance = sRef(storage, `Products/${file.name}`);

  await uploadBytes(storageRefInstance, file);

  const downloadURL = await getDownloadURL(storageRefInstance);
  // console.log('Uploaded file and got download URL:', downloadURL);

  return downloadURL;
}

export async function DeleteProductDoc(id) {

  const res = await deleteDoc(doc(db, "Products", id));
  console.log(res);
  return null;
}

