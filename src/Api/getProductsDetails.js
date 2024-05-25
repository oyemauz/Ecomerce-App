import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase.config';
import { getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import {  storageRef as sRef } from "../config/firebaseStorage.config";
import { doc, setDoc } from "firebase/firestore"; 

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

function generateRandomId() {
  return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
}

export async function CreateNewProduct(items) {

  const url=await uploadImageOnFireStore(items.imageUrl[0]);
  await setDoc(doc(db, "Products", generateRandomId()), {
    ...items,
    rating: 3.4,
    basePrice:"PKR",
    imageUrl:url
  });
   
}


async function uploadImageOnFireStore(file) {
  const storage = getStorage(); // Get the initialized storage instance
  const storageRefInstance = sRef(storage, `Products/${file.name}`);
  
  // Upload file to Firebase Storage
  await uploadBytes(storageRefInstance, file);

  // Get the download URL for the uploaded file
  const downloadURL = await getDownloadURL(storageRefInstance);
  // console.log('Uploaded file and got download URL:', downloadURL);
  
  return downloadURL;
}

export async function getProductsImages() {
  // Create a reference to the file we want to download
  const storage = getStorage();
  const starsRef = sRef(storage, 'Products/apple.png');
  console.log(starsRef);
  
  // Get the download URL
  getDownloadURL(starsRef)
    .then((url) => {
      console.log(url);
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}
