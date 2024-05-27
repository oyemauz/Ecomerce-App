import { collection, getDocs ,doc, setDoc,deleteDoc } from "firebase/firestore";
import { db } from '../config/firebase.config';
import { getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import {  storageRef as sRef } from "../config/firebaseStorage.config";

// Export all products from database

export async function getProducts() {
  const productsCol = collection(db, "Products");
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs.map(doc => doc.data());

  if (productList.length > 0) {
    return productList;
  } else {
    console.error("No products found!");
  }
}

// generate Random Id
function generateRandomId() {
  return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
}

// add new product into database.
export async function CreateNewProduct(items) {

  const {name,price,imageUrl,quantity}=items;
  const url=await uploadImageOnFireStore(imageUrl[0]);
  await setDoc(doc(db, "Products", generateRandomId()), {
    name,
    price:Number(price),
    rating: Number(0),
    basePrice:"PKR",
    imageUrl:url,
    quantity:Number(quantity),
  });
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

export async function DeleteProductDoc(id='id-d5y9mnm43-1716663876223'){

  const res=await deleteDoc(doc(db, "Products", id));
  console.log(res);
  return null;
}

