import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase.config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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

export async function getProductsImages(){

  // Create a reference to the file we want to download
  const storage = getStorage();
  const starsRef = ref(storage, 'Products/apple.png');
  console.log(starsRef)  
  // Get the download URL
  getDownloadURL(starsRef)
    .then((url) => {
      console.log(url)
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
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}
