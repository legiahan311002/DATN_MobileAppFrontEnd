import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4P5NVvyeKz7EkqeCCOw_h-uShr19W3QQ",
  authDomain: "seaside-upload.firebaseapp.com",
  projectId: "seaside-upload",
  storageBucket: "seaside-upload.appspot.com",
  messagingSenderId: "867706354694",
  appId: "1:867706354694:web:45386b9ac3085becd59787",
  measurementId: "G-FKRPXNJ7MG",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const getlistAll = async () => {
  const listImages = [];
  try {
    const storageRef = firebase.storage().ref();
    const listRef = storageRef.child("/");
    const res = await listRef.listAll();

    const downloadURLPromises = res.items.map(async (itemRef) => {
      const url = await itemRef.getDownloadURL();
      listImages.push(url);
    });

    await Promise.all(downloadURLPromises);
    return listImages;
  } catch (error) {
    console.log(error);
  }

  // console.log(listImages);
};

const storage = firebase.storage();

export { firebase, storage, getlistAll };


/// upload to firebase function
// const uploadImage = async () => {
//   try {
//     const { uri } = await FileSystem.getInfoAsync(image);
//     const blob = await new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = () => {
//         resolve(xhr.response);
//       };
//       xhr.onerror = (e) => {
//         reject(new TypeError("Network request failed."));
//       };
//       xhr.responseType = "blob";
//       xhr.open("GET", uri, true);
//       xhr.send(null);
//     });

//     const filename = image.substring(image.lastIndexOf("/") + 1);
//     const ref = firebase.storage().ref().child(filename);

//     setProdImage(filename);
//     console.log({ filename });
//     await ref.put(blob);

//     console.log("Photo uploaded!");
//     setImage(null);
//   } catch (error) {
//     console.log(error);
//   }
// };