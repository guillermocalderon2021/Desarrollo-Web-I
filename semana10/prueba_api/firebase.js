import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
  export const auth= getAuth(app);
  const db=getFirestore(app);

  //Registro
  export async function registerUser(email,password,userType){
    try{
       const userCredential=await createUserWithEmailAndPassword(auth,email,password);
       const user = userCredential.user; 
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role: userType  // Puede ser "admin", "editor", "viewer", etc.
        });
        
        console.log("Usuario registrado con tipo:", userType);
        return true;
    }
    catch(error){
        console.log("Error en el registro", error.message);
        return false;
    }
  }

  // Inicio de sesión
export async function loginUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user=userCredential.user;
      const prueba=await getDoc(doc(db,'users',user.uid));
  
      console.log("Inicio de sesión exitoso:", prueba.data().role);
      return prueba.data();
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
      return null;
    }
  }
  

  export const getUsers=()=>getDocs(collection(db,'users'))
  export const getUser=(id)=>getDoc(doc(db,'users',id))

  export async function getContactsByUser() {
    return new Promise((resolve, reject) => {
      // Esperar a que el estado de autenticación esté disponible
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        // Desuscribirse del listener para evitar múltiples llamadas
        unsubscribe();
  
        if (!user) {
          console.log("Usuario no autenticado");
          resolve([]);  // Si no está autenticado, retornamos un arreglo vacío
          return;
        }
  
        const contactsRef = collection(db, "contacts");
        const q = query(contactsRef, where("userId", "==", user.uid));
  
        try {
          const querySnapshot = await getDocs(q);
          
          // Si no hay contactos, devolvemos un arreglo vacío
          if (querySnapshot.empty) {
            console.log("No se encontraron contactos.");
            resolve([]);  // Devuelve un arreglo vacío si no hay contactos
            return;
          }
  
          // Mapear los documentos a un arreglo con los datos de los contactos
          const contacts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
  
          resolve(contacts);  // Devolvemos los contactos
        } catch (error) {
          console.error("Error al obtener los contactos:", error);
          resolve([]);  // Si hay un error, devolvemos un arreglo vacío
        }
      });
    });

  }