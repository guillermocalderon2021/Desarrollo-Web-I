  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCSUgZHktZJNBpsDpl6ACLv5nDI8V3MqT4",
    authDomain: "desarrollo-web-agenda.firebaseapp.com",
    projectId: "desarrollo-web-agenda",
    storageBucket: "desarrollo-web-agenda.firebasestorage.app",
    messagingSenderId: "983827071013",
    appId: "1:983827071013:web:356784b7dd6da1b3aebfcc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);

  // Función para registrar usuarios
 export async function registerUser(email,password){
    try{
        const userCredencial=await createUserWithEmailAndPassword(auth,email,password);
        console.log('Usuario registrado exitosamente: ', userCredencial.user);
    }
    catch(error){
        console.log('Error:' , error.message)
    }
}
