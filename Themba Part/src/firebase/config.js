// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged,  getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use

// Sbu Firebase
// Your web app's Firebase configuration
const firebaseConfigCustom = {
  apiKey: "AIzaSyDK8dnK7J7VRXOk2VB6iPyn2ATerXHTfHU",
  authDomain: "myrecipe-58c34.firebaseapp.com",
  projectId: "myrecipe-58c34",
  storageBucket: "myrecipe-58c34.appspot.com",
  messagingSenderId: "469853786927",
  appId: "1:469853786927:web:ab19b4fb8d8c4cfeee47da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfigCustom);
const auth = getAuth(app);

try{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("logged in: ", user);
    } else {
      console.log("No user logged in");
    }
  });
} catch(error){
  console.log("Error logging number of users signed-in: ", error);
}

// IOS: 637398448787-9fftbjkd9eoddk2h8qb0fq40upe7pbdg.apps.googleusercontent.com

export default auth;
